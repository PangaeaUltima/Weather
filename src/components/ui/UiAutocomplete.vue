<script setup lang="ts" generic="TItem extends string | Record<string, unknown>">
import UiInput from '@/components/ui/UiInput.vue';
import { computed, ref, useTemplateRef } from 'vue';
import { useElementSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

type ObjectItem = Extract<TItem, Record<string, unknown>>;
type SelectedValue = string | ObjectItem[keyof ObjectItem] | null;

const props = withDefaults(defineProps<{
  items?: TItem[]
  itemLabel?: keyof ObjectItem & string
  itemValue?: keyof ObjectItem & string
}>(), 
{
  items: () => [],
  itemLabel: undefined,
  itemValue: undefined,
})

const autocompleteInput = useTemplateRef<InstanceType<typeof UiInput>>('refAutocompleteInput')
const autocompleteInputWrapper = useTemplateRef<HTMLElement>('refAutocompleteInputWrapper')
const { height: autocompleteInputHeight } = useElementSize(autocompleteInputWrapper)
const { t } = useI18n()

const inputFocused = ref<boolean>(false)
const searchQuery = defineModel<string | null>('search', { default: null });
const selectedValue = defineModel<SelectedValue>({ default: null });

const showAutocompleteList = computed(() => inputFocused.value && props.items.length > 0)

const isStringItem = (item: TItem): item is Extract<TItem, string> => typeof item === 'string';
const isObjectItem = (item: TItem): item is ObjectItem => typeof item === 'object' && item !== null;

const getItemLabel = (item: TItem): string => {
  if (isStringItem(item)) {
    return item;
  }

  if (!isObjectItem(item) || !props.itemLabel) {
    return '';
  }

  const value = item[props.itemLabel];
  return value == null ? '' : String(value);
};

const getItemValue = (item: TItem): SelectedValue => {
  if (isStringItem(item)) {
    return item;
  }

  if (!isObjectItem(item)) {
    return null;
  }

  if (!props.itemValue) {
    return getItemLabel(item);
  }

  return item[props.itemValue] ?? null;
};

const selectItem = (item: TItem) => {
  selectedValue.value = getItemValue(item);
  searchQuery.value = getItemLabel(item);
  autocompleteInput.value?.input?.blur();
};

const keepAutocompleteFocused = (event: MouseEvent) => {
  event.preventDefault();
  autocompleteInput.value?.input?.focus();
};
</script>

<template>
  <div
    class="ui-autocomplete"
  >
    <div ref="refAutocompleteInputWrapper">
      <UiInput
        ref="refAutocompleteInput"
        v-model="searchQuery"
        :label="t('search')"
        @blur="inputFocused = false"
        @focus="inputFocused = true"
      />
    </div>
    

    <div
      v-if="showAutocompleteList"
      class="autocomplete-items"
      :style="{
        top: `${autocompleteInputHeight}px`
      }"
      @mousedown="keepAutocompleteFocused"
    >
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="autocomplete-item"
        @click="selectItem(item)"
      >
        <span>{{ getItemLabel(item) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ui-autocomplete {
  position: relative;
  display: flex;
  flex-direction: column;
}

.ui-autocomplete .autocomplete-items {
  z-index: 9;
  position: relative;
  background: #FFF;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}

.ui-autocomplete .autocomplete-item {
  cursor: pointer;
  padding: 8px 16px;
}

.ui-autocomplete .autocomplete-item:hover {
  background-color: rgba(0,0,0,0.06);
}
</style>
