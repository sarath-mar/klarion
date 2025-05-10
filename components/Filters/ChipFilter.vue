<template>
  <p class="font-small mb-2">{{ label }}</p>
  <div class="d-flex flex-wrap ga-2 pb-4">
    <v-chip
      v-for="item in completeItemList"
      :key="item?.key"
      variant="outlined"
      class="c-pointer"
      :class="{ 'active-chip': selectedItems.includes(item.key) }"
      @click="handleChipClick(item.key)"
    >
      {{ item.displayName }}
    </v-chip>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const ALL = "all";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  hasSelectAllFeature: {
    type: Boolean,
    default: false,
  },
  selectAllLabel: {
    type: String,
    default: "All",
  },
  items: {
    type: Array,
    default: () => [],
  },
});
const selectedItems = ref([]);
const emit = defineEmits(["selected-items"]);
const completeItemList = computed(() => {
  if (props.hasSelectAllFeature) {
    const allItems = { key: ALL, displayName: props.selectAllLabel };
    return [allItems, ...props.items];
  }
  return props.items;
});
const handleChipClick = (key) => {
  if (key === ALL) {
    if (selectedItems.value.length === completeItemList.value.length) {
      selectedItems.value = [];
    } else {
      selectedItems.value = completeItemList.value.map((item) => item.key);
    }
  } else {
    if (!selectedItems.value.includes(key)) {
      selectedItems.value.push(key);
    } else {
      selectedItems.value = selectedItems.value.filter((item) => item !== key);
    }
  }
  const emittedItemWithoutAll = selectedItems.value.filter(
    (item) => item !== ALL
  );

  emit("selected-items", emittedItemWithoutAll);
};
</script>
<style scoped>
.active-chip {
  background-color: var(--secondary-background);
  color: var(--secondary-text-color);
}
</style>
