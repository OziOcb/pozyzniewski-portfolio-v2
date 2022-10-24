<template>
  <Transition name="modal">
    <div class="modal" v-if="isModalOpen">
      <div class="modal__overlay" @click="toggleHandler(false)"></div>

      <div class="modal__card">
        <BaseButton
          class="modal__closeBtn"
          rounded
          @click="toggleHandler(false)"
        >
          <Icon name="mingcute:close-fill" />
        </BaseButton>
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)

function toggleHandler(isOpen: boolean) {
  isModalOpen.value = isOpen
}

defineExpose({
  toggleHandler,
})
</script>

<style scoped lang="scss">
.modal,
.modal__overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal {
  z-index: $layer-modal-z-index;

  &__overlay {
    background-color: $color-modal-overlay;
  }

  &__card {
    position: absolute;
    display: grid;
    grid-template-rows: 1rem 1fr 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - 2rem);
    max-width: 36rem;
    max-height: calc(100vh - 2rem);
    background-color: $color-modal-bg;
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 0px 0.6em 1.25em $color-modal-shadow;
  }

  &__closeBtn {
    margin: 0.8rem 0.8rem 0 auto;
    z-index: $layer-modal-z-index + 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;
    overflow: scroll;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity $duration-animation-base linear;

  .modal__card {
    transition: all $duration-animation-base linear;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal__card {
    transform: translate(-55%, -50%);
  }
}
</style>
