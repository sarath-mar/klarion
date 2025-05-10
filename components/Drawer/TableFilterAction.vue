<template>
  <div>
    <p class="font-medium mb-2">Filter By</p>
    {{ filterData }}
    <chip-filter
      :items="tableFilterIssueType"
      label="Issue Type"
      has-select-all-feature
      @selected-items="onIssueSelection"
    />
    <chip-filter
      :items="tableFilterTeams"
      label="Teams"
      @selected-items="onTeamsSelection"
    />
    <table-filter-by-field
      :filter-data-by-field="filterData.remainingFilters"
    />
    <table-option-selector
      :action-type="TABLE_ACTION.FILTER"
      @selection-change="onSelectionChange"
    />
  </div>
</template>
<script setup>
import { TABLE_ACTION } from "~/utils/constants.js";
import { tableFilterIssueType } from "~/mock-data/tableFilterIssueType.js";
import { tableFilterTeams } from "~/mock-data/tableFilterTeams.js";
import TableOptionSelector from "~/components/Drawer/TableOptionSelector.vue";
import TableFilterByField from "~/components/Drawer/TableFilterByField.vue";
import ChipFilter from "~/components/Filters/ChipFilter.vue";
const components = {
  TableOptionSelector,
  TableFilterByField,
  ChipFilter,
};
const filterData = reactive({
  selectedFilterIssueType: [],
  selectedFilterTeams: [],
  remainingFilters: new Map(),
});
const onIssueSelection = (selectedValues) => {
  filterData.selectedFilterIssueType = [...selectedValues];
};
const onTeamsSelection = (selectedValues) => {
  filterData.selectedFilterTeams = [...selectedValues];
};
const onSelectionChange = (item) => {
  const { remainingFilters } = filterData;
  remainingFilters.set(item.key, {
    ...item,
    scope: "",
    scopeValue: "",
    scopeFrom: "",
    scopeTo: "",
  });
};
</script>
<style scoped></style>
