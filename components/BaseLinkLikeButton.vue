<template>
  <NuxtLink
    v-if="blank"
    class="baseLinkLikeButton"
    :to="to"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </NuxtLink>

  <NuxtLink v-else class="baseLinkLikeButton" :to="to">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/",
    },
    blank: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.baseLinkLikeButton {
  @extend %typography-button-alt;
  display: inline-block;
  padding: $size-button-alt-padding;
  font-weight: bold;
  color: $color-button-alt-text;
  text-decoration: none;
  background: $color-button-alt-bg;
  border: 2px solid $color-button-alt-border;
  border-radius: 0.625rem;
  box-shadow: 0 0.6em 1.25em $color-button-alt-shadow;
  transition: background $duration-animation-base linear,
    box-shadow $duration-animation-base linear,
    transform $duration-animation-base linear;
  &:hover,
  &:focus {
    background: $color-button-alt-bg-hover;
    box-shadow: 0 1.25em 2.5em $color-button-alt-shadow;
    transform: scale(1.03);
  }
  &:focus {
    outline: 0;
    box-shadow: 0 1.25em 2.5em $color-button-alt-shadow,
      0 0 2px 4px $color-outline;
  }
}
</style>
