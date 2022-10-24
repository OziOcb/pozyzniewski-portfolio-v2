<template>
  <div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
  </div>
</template>

<script>
import GithubCalendar from 'github-calendar'

export default {
  mounted() {
    GithubCalendar('.calendar', 'OziOcb', {
      responsive: true,
    })
  },
}
</script>

<style lang="scss">
// Below styles are copied from here - https://unpkg.com/github-calendar@2.3.1/dist/github-calendar-responsive.css

rect.ContributionCalendar-day[data-level='0'] {
  fill: rgba($color-github-calendar-single-commit-bg, 0.05);
}

rect.ContributionCalendar-day[data-level='1'] {
  fill: rgba($color-github-calendar-single-commit-bg, 0.3);
}

rect.ContributionCalendar-day[data-level='2'] {
  fill: rgba($color-github-calendar-single-commit-bg, 0.6);
}

rect.ContributionCalendar-day[data-level='3'] {
  fill: rgba($color-github-calendar-single-commit-bg, 0.8);
}

rect.ContributionCalendar-day[data-level='4'] {
  fill: rgba($color-github-calendar-single-commit-bg, 1);
}

.calendar .width-full > .float-left {
  display: none;
}

.calendar {
  font-family: Helvetica, arial;
  width: 100%;
  min-height: 243px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: -1.8rem;
  text-align: center;
}

.contrib-column {
  padding: 15px 0;
  text-align: center;
  border-top: 1px solid #ddd;
  font-size: 11px;
  border-left: none;
  @media (min-width: $breakpoint-sm) {
    border-left: 1px solid #ddd;
  }
}

.contrib-column-first {
  border-left: none;
}

.table-column {
  @media (min-width: $breakpoint-sm) {
    display: table-cell;
    width: 1%;
    padding-right: 10px;
    padding-left: 10px;
    vertical-align: top;
  }
}

.contrib-number {
  font-size: 1.5rem;
  display: block;
  color: $color-text-primary;
}

#user-activity-overview {
  display: none;
}

text.ContributionCalendar-label {
  fill: #ccc;
  font-size: 11px;
}
</style>
