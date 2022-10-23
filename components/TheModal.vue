<template>
  <div class="modalOverlay" @click="handleClose()"></div>

  <div class="modal">
    <BaseButton class="modal__closeBtn" rounded @click="handleClose()">
      <Icon name="mingcute:close-fill" />
    </BaseButton>

    <div class="modal__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'close'): void }>()

function handleClose() {
  emit('close')
}
</script>

<style scoped lang="scss">
.modalOverlay,
.modal {
  position: fixed;
  z-index: $layer-modal-z-index;
}

.modalOverlay {
  background-color: $color-modal-overlay;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.modal {
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
</style>
