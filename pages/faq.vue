<template>
  <main role="main">
    <SectionHero
      :content="{
        backgroundText: 'Faq',
        lead: 'Here you\'ll find',
        heading: 'find answers',
        extraLead: 'to the <strong>questions I get asked the most.</strong>',
      }"
    />
    <SectionFaq />
    <SectionContact />
  </main>
</template>

<script>
import {
  basicPageTransitionEnter,
  basicPageTransitionLeave,
} from '@/mixins/pageTransitions'
import SectionHero from '@/components/SectionHero.vue'
import SectionFaq from '@/components/SectionFaq.vue'
import SectionContact from '@/components/SectionContact.vue'

export default {
  components: { SectionHero, SectionFaq, SectionContact },
  mixins: [basicPageTransitionEnter, basicPageTransitionLeave],
  setup() {
    useHead({
      title: 'FAQ',
    })
  },
}
</script>
