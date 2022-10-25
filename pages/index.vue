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

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionAbout from '@/components/SectionAbout.vue'
import SectionSkills from '@/components/SectionSkills.vue'
import SectionPortfolio from '@/components/SectionPortfolio.vue'
import SectionContact from '@/components/SectionContact.vue'
import {
  basicPageTransitionEnter,
  basicPageTransitionLeave,
} from '@/mixins/pageTransitions'

export default {
  components: {
    SectionHero,
    SectionAbout,
    SectionSkills,
    SectionPortfolio,
    SectionContact,
  },
  mixins: [basicPageTransitionEnter, basicPageTransitionLeave],
  setup() {
    useHead({
      title: 'Home Page',
    })
  },
}
</script>
