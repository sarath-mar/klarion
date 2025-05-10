<template>
  <div class="mt-n3 mb-3">
    <div v-for="[key, filter] in filterDataByField" :key="key">
      <div class="d-flex justify-space-between align-center mb-n4">
        <p class="font-small">{{filter.displayName}}</p>
        <v-btn variant="text" icon class="ml-2" @click="removeFilter(key)">
             <Icon name="mdi-close" size="20"  />
        </v-btn>
      </div>
      <date-filter v-if="filter.type==='date'" :filter-data="filter" />
      <number-filter v-else-if="filter.type==='number'" :filter-data="filter"/> 
      <string-filter v-else-if="filter.type==='string'" :filter-data="filter"/> 
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import DateFilter from "~/components/Filters/DateFilter.vue";
import NumberFilter from "~/components/Filters/NumberFilter.vue";
import StringFilter from "~/components/Filters/StringFilter.vue";
const components = {
  DateFilter,
  NumberFilter,
  StringFilter
};
const props = defineProps({
  filterDataByField: {
    type: Object,
    default: () => new Map(),
  },
});
const removeFilter = (key) => {
  props.filterDataByField.delete(key);
};
</script>

<style scoped></style>
