<script setup lang="ts">
import { useId, useTemplateRef } from 'vue';

const emit = defineEmits<{
  (e: 'blur' | 'focus'): void
}>()

const slots = defineSlots<{
  label(): unknown
}>()

defineProps<{
  label?: string
  placeholder?: string
}>()

const input = useTemplateRef<HTMLInputElement>('refInput')

const id = useId()
const inputValue = defineModel<string | null>({ default: null })

defineExpose({
  input,
})
</script>

<template>
  <label
    class="ui-input-label"
    :for="id"
  >
    <div v-if="slots.label || label">
      <slot
        v-if="slots.label"
        name="label"
      />
      <span v-else-if="label">
        {{ label }}
      </span>
    </div>
    

    <input
      :id="id"
      ref="refInput"
      v-model="inputValue"
      :placeholder="placeholder"
      type="text"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
  </label>
</template>

<style scoped>
.ui-input-label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ui-input-label input {
  padding: 4px 8px;
  border-color: var(--border);
}
</style>