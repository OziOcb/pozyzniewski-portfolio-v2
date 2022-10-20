<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Index</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>

    <div>count (state): {{ countStore.count }}</div>
    <div>double count (getter): {{ countStore.doubleCount }}</div>

    <hr />
  </header>
</template>

<script setup lang="ts">
const countStore = useCounterStore()
</script>

<style lang="sass">
a
  color: $color-primary
</style>
