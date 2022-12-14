<template>
  <button class="ghCalendar" @click="$emit('open-modalGithubCalendar')">
    <div class="ghCalendar__inner">
      <div class="ghCalendar__months">
        <span v-for="(month, index) in months" :key="index">{{ month }}</span>
      </div>

      <div class="ghCalendar__weekDays">
        <span v-for="(weekDay, index) in weekDays" :key="index">
          {{ weekDay }}
        </span>
      </div>

      <div class="ghCalendar__commits commitsGrid">
        <div v-for="n in 365" :key="n"></div>
      </div>

      <div class="ghCalendar__overlay">
        <Icon name="SvgGitHubBlack" />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  emits: ["open-modalGithubCalendar"],

  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      weekDays: ["Mon", "Wed", "Fri"],
    };
  },
};
</script>

<style lang="scss" scoped>
.ghCalendar {
  position: relative;
  padding: 0;
  font-family: Helvetica, sans-serif;
  font-size: 0.625rem;
  color: $color-github-calendar-text;
  cursor: pointer;
  background-color: $color-github-calendar-bg;
  border: none;
  border-radius: 0.625em;
  box-shadow: 0 0.6em 1.25em $color-github-calendar-shadow;
  transition: background $duration-animation-base linear,
    box-shadow $duration-animation-base linear,
    transform $duration-animation-base linear;

  &:hover,
  &:focus {
    box-shadow: 0 1.25em 2.5em $color-button-shadow;
    transform: scale(1.03);
  }
  &:focus {
    outline: 0;
    box-shadow: 0 1.25em 2.5em $color-button-shadow, 0 0 2px 4px $color-outline;
  }
  @media (min-width: $breakpoint-lg) {
    font-size: 0.8125rem;
  }

  &__inner {
    display: grid;
    grid-template-areas:
      ". months"
      "weekDays commitsGrid";
    grid-template-rows: 40px auto;
    grid-template-columns: 40px auto;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  &__months {
    display: flex;
    grid-area: months;
    align-items: flex-end;
    padding-bottom: 0.7em;
    overflow: hidden;

    > span {
      min-width: 100px;
      text-align: center;
    }
  }

  &__weekDays {
    display: flex;
    flex-direction: column;
    grid-area: weekDays;
    align-items: flex-end;
    justify-content: space-around;
    padding-right: 0.625em;
  }

  &__commits {
    grid-area: commitsGrid;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: $color-github-calendar-bg;
    border-radius: 0.625em;
    opacity: 0;
    transition: opacity $duration-animation-github-calendar-hover linear;

    svg {
      width: 220px;
      height: 220px;
      opacity: 0;
      fill: $color-github-calendar-svg-fill;
      transition: opacity $duration-animation-github-calendar-hover
          $duration-animation-github-calendar-hover linear,
        transform ($duration-animation-github-calendar-hover * 2) linear;
      @media (min-width: $breakpoint-lg) {
        width: 320px;
        height: 320px;
      }
    }
  }
  &:hover &__overlay,
  &:focus &__overlay {
    opacity: 0.7;

    svg {
      opacity: 0.7;
      transform: rotate(15deg) scale(1.2);
    }
  }
}

.commitsGrid {
  display: grid;
  grid-template-rows: repeat(7, 19px);
  grid-template-columns: repeat(53, 19px);
  grid-auto-flow: column;
  grid-row-gap: 4px;
  grid-column-gap: 4px;
  overflow: hidden;
  @media (min-width: $breakpoint-lg) {
    grid-template-rows: repeat(7, 35px);
    grid-template-columns: repeat(53, 35px);
  }

  > div {
    background: rgba($color-github-calendar-single-commit-bg, 0.05);
    &:nth-child(2n + 1) {
      background-color: rgba($color-github-calendar-single-commit-bg, 0.3);
    }
    &:nth-child(13n + 11) {
      background-color: rgba($color-github-calendar-single-commit-bg, 0.6);
    }
    &:nth-child(5n + 3) {
      background-color: rgba($color-github-calendar-single-commit-bg, 0.8);

      &:before,
      &:after {
        animation: commitBoxGlare $duration-animation-github-calendar
          $duration-animation-github-calendar-delay ease infinite;
      }
    }
    &:nth-child(11n + 7) {
      background-color: rgba($color-github-calendar-single-commit-bg, 1);

      &:before,
      &:after {
        animation: commitBoxGlare $duration-animation-github-calendar linear
          infinite;
      }
    }

    &:nth-child(5n + 3),
    &:nth-child(11n + 7) {
      position: relative;
      overflow: hidden;

      &:before,
      &:after {
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
        content: "";
        background-color: $color-white;
        transform: skewX(25deg);
      }
      &:before {
        width: 18px;
        opacity: 0.15;
      }
      &:after {
        left: -55%;
        width: 4px;
        opacity: 0.4;
      }
    }
  }
}

@keyframes commitBoxGlare {
  50%,
  100% {
    transform: skewX(30deg) translateX(200px);
  }
}
</style>
