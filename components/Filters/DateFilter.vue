<template>
  <v-row>
    <v-col cols="3">
      <v-select
        v-model="filterData.scope"
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
        v-model="filterData.scopeValue"
        density="compact"
        variant="outlined"
        :items="dateFilterItems"
        item-value="key"
        item-title="displayName"
        hide-details
      ></v-select>
    </v-col>
    <v-col v-if="filterData.scopeValue==='customRange'" cols="6">
      <v-row>
        <v-col cols="6">
          <date-picker @on-date-change="onStartDateChange"/>
        </v-col>
        <v-col cols="6">
         <date-picker @on-date-change="onEndDateChange"/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { onMounted,reactive } from 'vue';
import DatePicker from '~/components/Common/DatePicker.vue';
const components = {
  DatePicker,
};
const props = defineProps({
  filterData: {
    type: Object,
    default: () => ({}),
  },
});
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
onMounted(() => {
    props.filterData.scope = dateFilterOptions[0].key;
    props.filterData.scopeValue = dateFilterItems[0].key;
});
const onStartDateChange = (date) => {
  props.filterData.scopeFrom = date;
};
const onEndDateChange = (date) => {
  props.filterData.scopeTo = date;
};
</script>

<style scoped>
</style>
