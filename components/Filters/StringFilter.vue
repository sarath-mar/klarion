<template>
    <v-row>
      <v-col cols="6" sm="3">
        <v-select
        hide-details
          v-model="filterData.scope"
          density="compact"
          variant="outlined"
          :items="stringFilterOptions"
          item-value="key"
          item-title="displayName"
        ></v-select>
      </v-col>
      <v-col cols="6" sm="9">
        <v-text-field  v-model="filterData.scopeValue" hide-details placeholder='Enter value' density="compact" variant="outlined"></v-text-field>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  
const stringFilterOptions = [
    { key: "contains", displayName: "Contains" },
    { key: "beginsWith", displayName: "Begins With" },
    { key: "endsWith", displayName: "Ends With" },
    { key: "equalTo", displayName: "Equal To" },
];
  const props = defineProps({
    filterData: {
      type: Object,
      default: () => ({}),
    },
  });
  onMounted(() => {
    props.filterData.scope = stringFilterOptions[0].key;
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  