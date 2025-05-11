<template>
  <div>
    <p class="font-small mb-1">{{ actionLabel.title }}</p>
    <v-autocomplete
      density="compact"
      variant="outlined"
      :items="actionLabel.items"
      :placeholder="actionLabel.placeHolder"
      auto-select-first
      clear-on-select
      @update:modelValue="onSelectionChange"
      item-value="key"
      item-title="displayName"
      return-object
    >
      <template #prepend-inner>
        <Icon name="mdi-filter-variant" />
      </template>
    </v-autocomplete>
  </div>
</template>
<script setup>
import { defineProps, computed, ref, watch, defineEmits } from "vue";
import { TABLE_ACTION } from "~/utils/constants.js";
import { tableFields } from "~/mock-data/tableFields.js";

const props = defineProps({
  actionType: {
    type: String,
  },
});
const emit = defineEmits(["selection-change"]);
// const autocompleteValue = ref(null);
const onSelectionChange = (value) => {
    emit("selection-change", value);
};
const actionLabel = computed(() => {
  const actionData = { placeHolder: "", title: "", items: [] };
  switch (props.actionType) {
    case TABLE_ACTION.GROUP:
      actionData.placeHolder = "Select";
      actionData.title = "Group by";
      actionData.items = getGroupingFields();
      return actionData;
    case TABLE_ACTION.FILTER:
      actionData.placeHolder = "Filter by";
      actionData.title = "Add Filters";
      actionData.items = getFilterableFields();
      return actionData;
    default:
      return actionData;
  }
});
function getFilterableFields() {
  return tableFields.filter((field) => {
    return field.filterable 
  });
}
function getGroupingFields() {
  return tableFields.filter((field) => {
    return field.groupable 
  });
}
</script>
<style scoped></style>
