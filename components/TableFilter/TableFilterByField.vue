<template>
  <div class="mt-n2 mb-3">
    <div v-for="[key, filter] in filterDataByField" :key="key">
      <div class="d-flex justify-space-between align-center my-2">
        <p class="font-small">{{ filter.displayName }}</p>
        <Icon
          name="mdi-close"
          size="20"
          class="c-pointer"
          @click="removeFilter(key)"
        />
      </div>
      <date-filter
        v-if="filter.type === TABLE_FILTER_TYPES.DATE"
        :filter-data="filter"
      />
      <number-filter
        v-else-if="filter.type === TABLE_FILTER_TYPES.NUMBER"
        :filter-data="filter"
      />
      <string-filter
        v-else-if="filter.type === TABLE_FILTER_TYPES.STRING"
        :filter-data="filter"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { TABLE_FILTER_TYPES } from "~/utils/constants.js";
import DateFilter from "~/components/Filters/DateFilter.vue";
import NumberFilter from "~/components/Filters/NumberFilter.vue";
import StringFilter from "~/components/Filters/StringFilter.vue";
const components = {
  DateFilter,
  NumberFilter,
  StringFilter,
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
