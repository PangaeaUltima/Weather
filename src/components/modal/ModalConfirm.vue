<script setup lang="ts">
import { nextTick, ref } from 'vue';
import AppModal from '@/components/app/modal/AppModal.vue';
import UiButton from '@/components/ui/UiButton.vue';
import { useI18n } from 'vue-i18n';

withDefaults(defineProps<{
  text?: string
  closeOnOverlay?: boolean
}>(), {
  text: '',
  closeOnOverlay: false,
});

const emit = defineEmits<{
  (e: 'cancel' | 'confirm' | 'close'): void
}>();

const { t } = useI18n()

const opened = ref(false);
let resolvePromise: ((value: boolean) => void) | null = null;

const settle = async (value: boolean) => {
  const currentResolve = resolvePromise;
  resolvePromise = null;

  if (!opened.value) {
    currentResolve?.(value);
    return;
  }

  opened.value = false;
  await nextTick();
  emit('close');
  currentResolve?.(value);
};

const close = () => {
  settle(false);
};

const open = () => {
  if (resolvePromise) {
    resolvePromise(false);
  }

  opened.value = true;
  return new Promise<boolean>((resolve) => {
    resolvePromise = resolve;
  });
};

const onCancel = () => {
  emit('cancel');
  settle(false);
};

const onConfirm = () => {
  emit('confirm');
  settle(true);
};

defineExpose({
  close,
  open,
});
</script>

<template>
  <AppModal
    v-model="opened"
    :close-on-overlay="closeOnOverlay"
  >
    <div class="modal-confirm">
      <h2 class="title">
        {{ t('confirmAction') }}
      </h2>

      <div class="actions">
        <UiButton
          class="button button-cancel"
          @click="onCancel"
        >
          {{ t('cancel') }}
        </UiButton>
        <UiButton
          class="button"
          @click="onConfirm"
        >
          {{ t('confirm') }}
        </UiButton>
      </div>
    </div>
  </AppModal>
</template>

<style scoped>
.modal-confirm {
  display: grid;
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
}

.content {
  display: grid;
  gap: 12px;
}

.title {
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
}

.text {
  margin: 0;
  color: rgba(0, 0, 0, 0.72);
  line-height: 1.5;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.button {
  min-width: 110px;
}

.button-cancel {
  background-color: transparent;
  color: inherit;
}
</style>
