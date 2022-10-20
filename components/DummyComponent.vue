<template>
  <h2>Store</h2>
  <button @click="countStore.decrement()">-</button>
  {{ countStore.count }}
  <button @click="countStore.increment()">+</button>

  <h2>Assets</h2>
  <img src="~/assets/img/youtube.png" alt="YouTube" width="24" />
  <Icon name="uil:github" size="24px" />
  <Icon name="IconInstagram" size="24px" />

  <h2>API</h2>
  <button @click="addNewPostHandler()">Add</button>
  <div v-for="post in posts" :key="post.id">
    {{ post.id }}. Title - {{ post.title }}
  </div>
</template>

<script setup lang="ts">
import { Post, NewPost } from '@/types/Post'
const countStore = useCounterStore()

const { data: posts } = await useFetch<Post[]>(
  'https://jsonplaceholder.typicode.com/posts'
)

const addNewPostHandler = async () => {
  const newPost: NewPost = {
    title: 'newPost ' + Math.round(Math.random() * 100),
    body: 'body 123',
    userId: 411,
  }

  try {
    const res = await $fetch<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: newPost as NewPost,
      }
    )

    posts.value?.unshift(res)
  } catch (e) {
    console.log(e)
  }
}
</script>
