<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template #activator="{ props }">
      <v-text-field
        hide-details
        density="compact"
        variant="outlined"
        :value="formatDate(date)"
        readonly
        v-bind="props"
      ></v-text-field>
    </template>
    <v-date-picker
      :max="formatMinMaxDate(new Date())"
      v-model="date"
      @update:model-value="onMenuInput"
      @input="onMenuInput"
      color="secondary"
    ></v-date-picker>
  </v-menu>
</template>

<script setup>
import { defineEmits, ref } from "vue";
const menu = ref(false);
const date = ref(new Date());
// const date = ref(new Date('2023-10-01'));
const emit = defineEmits(["on-date-change"]);

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
const defaultDateFormat = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
const formatMinMaxDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
onMounted(() => {
  onMenuInput(date.value);
});
const onMenuInput = (val) => {
  menu.value = false;
  emit("on-date-change", defaultDateFormat(val));
};
</script>

<style scoped></style>
