<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>

<script setup lang="ts">
import { Meta } from '@zhead/schema'

useHead({
  title: 'About Page',
  meta: [{ name: 'description', content: 'About me page!' }] as Meta[],
})
</script>
