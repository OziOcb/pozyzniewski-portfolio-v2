<template>
  <main role="main">
    <SectionHero
      :content="{
        backgroundText: 'Dev',
        lead: 'Hello',
        heading: 'it\'s Paul',
        extraLead: 'The <strong>Senior Frontend Developer</strong> you need!',
      }"
    />
    <SectionAbout />
    <SectionSkills />
    <SectionPortfolio />
    <SectionContact />
  </main>
</template>

<script setup>
import {
  useBasicPageTransitionEnter,
  useBasicPageTransitionLeave,
} from '@/composable/pageTransitions'

useHead({
  title: 'Home Page',
})

onMounted(() => {
  console.log('-\n--\n hehe \n--\n-') // REMOVE_ME: remove when done!
})

useBasicPageTransitionEnter()
useBasicPageTransitionLeave()
</script>
