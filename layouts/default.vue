<template>
  <div class="layout">
    <TheHeader />

    <ThePageTransitionOverlay />

    <div class="pageTransitionWrapper">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>
