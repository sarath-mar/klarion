<template>
  <v-row>
    <v-col :cols="isBetween ? '4' : '6'" sm="3">
      <v-select
      hide-details
        v-model="filterData.scope"
        density="compact"
        variant="outlined"
        :items="numberFilterOptions"
        item-value="key"
        item-title="displayName"
      ></v-select>
    </v-col>
    <v-col :cols="isBetween ? '8' : '6'" sm="9">
      <v-row v-if="isBetween">
        <v-col cols="6">
          <v-text-field type='number' v-model='filterData.scopeFrom' hide-details placeholder='Enter min value' density="compact" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field type='number' v-model="filterData.scopeTo" hide-details placeholder='Enter max value' density="compact" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-text-field v-else type='number' v-model="filterData.scopeValue" hide-details placeholder='Enter value' density="compact" variant="outlined"></v-text-field>
    </v-col>
  </v-row>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

const numberFilterOptions = [
  { key: "equalTo", displayName: "Equal To" },
  { key: "lessThan", displayName: "Less Than" },
  { key: "greaterThan", displayName: "Greater Than" },
  { key: "between", displayName: "Between" },
];
const props = defineProps({
  filterData: {
    type: Object,
    default: () => ({}),
  },
});
const isBetween = computed(() => props.filterData.scope === 'between');
onMounted(() => {
  props.filterData.scope = numberFilterOptions[0].key;
});
</script>

<style scoped>
/* Add your styles here */
</style>
