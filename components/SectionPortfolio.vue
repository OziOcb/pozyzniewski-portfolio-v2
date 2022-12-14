<template>
  <section class="portfolio">
    <div class="portfolio__textWrapper">
      <div class="portfolio__column">
        <h2 class="portfolio__title fixedSize">portfolio</h2>
      </div>
      <div class="portfolio__column">
        <p class="portfolio__desc">
          Collection of my recent
          <strong>design</strong>
          and
          <strong>development work.</strong>
          I am constantly working on&nbsp;new projects so this list will soon be
          expanded.
        </p>
      </div>
    </div>

    <h3 class="portfolio__listTitle">Portfolio Projects List</h3>
    <ul class="portfolio__list">
      <li
        v-for="(project, index) in portfolioProjects"
        :key="index"
        class="portfolio__listItem"
      >
        <PortfolioProject :project-info="project" />
      </li>
    </ul>
  </section>
</template>

<script>
import PortfolioProject from "@/components/PortfolioProject.vue";

export default {
  components: {
    PortfolioProject,
  },
  data() {
    return {
      portfolioProjects: [
        {
          year: 2021,
          title: "Veriffica Mobile App",
          desc: "Design & Development - Vue.js (Quasar)",
          designUrl:
            "https://www.figma.com/file/VEzge00Ar7BdCOPMFt60ML/Veriffica-App---HQ-Mockup?node-id=66%3A0",
          projectUrl:
            "https://apps.apple.com/gb/app/veriffica-car-check/id1589604742",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(11,101,179,0.9)",
          bgImage: "veriffica",
        },
        {
          year: 2020,
          title: "The official Gridsome Starter Kit",
          desc: "Design & Development - Vue.js (Gridsome), GSAP",
          repoUrl:
            "https://github.com/OziOcb/Gridsome-and-Markdown-Starter-Kit",
          projectUrl:
            "https://gridsome.org/starters/gridsome-and-markdown-starter-kit-page-transitions/",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(3,131,92,0.9)",
          bgImage: "gridsomeStarterKit",
        },
        {
          year: 2020,
          title: "This Portfolio",
          desc: "Design & Development - Vue.js (Gridsome), Netlify, GSAP",
          repoUrl: "https://github.com/OziOcb/pozyzniewski-portfolio",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(239,111,108,0.9)",
          bgImage: "design",
          designUrl:
            "https://www.figma.com/file/NGbKGUI6RKF3N6SB9LOuSt/poz-portfolio__wireframe?node-id=0%3A1",
        },
        {
          year: 2019,
          title: "Dude is this another TODO list?",
          desc: "Design & Development - Vue.js (Vuetify, Vuex, VueRouter), Firebase",
          repoUrl: "https://github.com/OziOcb/Dude-is-this-another-Todo-List",
          projectUrl: "https://dude-is-this-another-todolist3.web.app/auth",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(0,145,235,0.6)",
          bgImage: "default",
        },
        {
          year: 2019,
          title: "ScrollMagic & GSAP Playground",
          desc: "ScrollMagic & GSAP",
          repoUrl:
            "https://github.com/OziOcb/ScrollMagic-GSAP-Playground/blob/master/js/main.js",
          projectUrl: "https://awesome-roentgen-f2a498.netlify.com/",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(132,205,4,0.6)",
          bgImage: "gsap",
        },
        {
          year: 2018,
          title: "Bootstrap 4 Challenge",
          desc: "Development - HTML5, CSS3, SASS, JavaScript, Bootstrap, Jekyll, Gulp, Git",
          repoUrl: "https://github.com/OziOcb/Bootstrap4_challenge",
          projectUrl: "https://oziocb.github.io/Bootstrap4_challenge/",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(86,61,124,0.9)",
          bgImage: "bootstrapChallenge",
        },
        {
          year: 2018,
          title: "The Town End Boxing Academy",
          desc: "Development - HTML5, CSS3/Sass, Basic jQuery",
          repoUrl: "https://github.com/OziOcb/03_Project-box",
          projectUrl: "https://oziocb.github.io/03_Project-box/",
          colorGradientPrimary: "rgba(255,255,255,0.9)",
          colorGradientSecondary: "rgba(240,27,22,0.6)",
          bgImage: "townEndBoxing",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  @extend %skewBorderBeforeFlip;
  @extend %skewBorderAfterFlip;
  padding-top: $size-section-padding-top;
  padding-bottom: calc($size-section-padding-bottom / 1.5);
  background-color: $color-body-bg-light;
  @media (min-width: $breakpoint-lg) {
    padding-top: calc($size-section-padding-top--desktop / 1.25);
    padding-bottom: calc($size-section-padding-bottom--desktop / 1.25);
  }

  &__textWrapper {
    @media (min-width: $breakpoint-lg) {
      display: flex;
      justify-content: center;
      height: 200px;
      margin-bottom: 100px;
    }
  }
  &__column {
    flex: 1;
  }

  &__title {
    text-align: center;
    @media (min-width: $breakpoint-lg) {
      padding-right: $size-gutter-width;
      text-align: right;
    }
  }

  &__desc {
    padding-right: $size-gutter-width;
    padding-left: $size-gutter-width;
    margin-bottom: 40px;
    @media (min-width: $breakpoint-lg) {
      max-width: 400px;
      padding-right: 0;
      padding-left: 0;
      margin-top: 100px;
    }
  }

  &__listTitle {
    display: none;
  }

  &__list {
    padding-left: 0;
    list-style: none;
  }
}
</style>
