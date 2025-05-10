<template>
  <v-row>
    <v-col cols="3">
      <v-select
        v-model="selectedDateFilter"
        density="compact"
        variant="outlined"
        :items="dateFilterOptions"
        item-value="key"
        item-title="displayName"
        hide-details
      ></v-select>
    </v-col>
    <v-col cols="3">
      <v-select
        v-model="selectedDateFilterItem"
        density="compact"
        variant="outlined"
        :items="dateFilterItems"
        item-value="key"
        item-title="displayName"
        hide-details
      ></v-select>
    </v-col>
    <v-col v-if="selectedDateFilterItem==='customRange'" cols="6">
      <v-row>
        <v-col cols="6">
          <date-picker/>
        </v-col>
        <v-col cols="6">
         <date-picker/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import DatePicker from '~/components/Common/DatePicker.vue';
const components = {
  DatePicker,
};
const dateFilterOptions = [
  { key: "withIn", displayName: "Within" },
  { key: "notWithIn", displayName: "Not Within" },
];
const dateFilterItems = [
  { key: "today", displayName: "Today" },
  { key: "yesterday", displayName: "Yesterday" },
  { key: "thisWeek", displayName: "This Week" },
  { key: "thisMonth", displayName: "This Month" },
  { key: "thisQuarter", displayName: "This Quarter" },
  { key: "thisYear", displayName: "This Year" },
  { key: "last7Days", displayName: "Last 7 Days" },
  { key: "last30Days", displayName: "Last 30 Days" },
  { key: "last90Days", displayName: "Last 90 Days" },
  { key: "last365Days", displayName: "Last 365 Days" },
  { key: "customRange", displayName: "Custom Range" },
];
const selectedDateFilter = ref(dateFilterOptions[0].key);
const selectedDateFilterItem = ref(dateFilterItems[0].key);
</script>

<style scoped>
</style>
