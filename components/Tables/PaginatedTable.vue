<template>
  <table-action @on-apply-click="onApplyClick" />
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="tableHeader"
    :items="tableData"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
    class="custom-header mt-5"
    :group-by="isGroupBy && groupBy"
    :group-desc="true"
  >
    <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
      <tr>
        <td :colspan="columns.length">
          <div class="d-flex align-center">
            <v-btn
              :icon="isGroupOpen(item) ? '$expand' : '$next'"
              color="medium-emphasis"
              density="comfortable"
              size="small"
              variant="outlined"
              @click="toggleGroup(item)"
            ></v-btn>
            <span class="ms-4">{{ groupBy[0]?.displayName }}: {{ item.value }}</span>
          </div>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>

<script setup>
import TableAction from "~/components/Tables/TableAction.vue";
import { ref, reactive, inject } from "vue";
import { tableData as mockData, headerData } from "~/mock-data/tableData.js";
import {
  applyNumberFilter,
  applyDateFilter,
  applyStringFilter,
} from "~/mock-data/filterData.js";
import { TABLE_ACTION } from "~/utils/constants.js";
const sharedData = inject("sharedData");
const isGroupBy = ref(false);
const groupBy = reactive([
  {
    key: "",
    order: "",
    displayName: "",
  },
]);
const tableHeader = headerData;
const itemsPerPage = ref(10);
const loading = ref(false);
const totalItems = ref(mockData.length);
const tableData = ref([]);

const pagination = reactive({
  page: 1,
  itemsPerPage: itemsPerPage.value,
});
const onApplyClick = (type) => {
  if (type === TABLE_ACTION.FILTER) {
    isGroupBy.value = false;
  } else if (type === TABLE_ACTION.GROUP) {
    isGroupBy.value = true;
    groupBy[0] = {
      key: sharedData.groupData.field,
      order: sharedData.groupData.orderBy,
      displayName: sharedData.groupData.displayName,
    };
  }
  loadItems(pagination);
};
const applyFilters = (data, filters) => {
  if (!filters) return data;
  if (filters.selectedFilterIssueType?.length) {
    data = data.filter((item) =>
      filters.selectedFilterIssueType.includes(item.issue)
    );
  }

  if (filters.selectedFilterTeams?.length) {
    data = data.filter((item) =>
      filters.selectedFilterTeams.includes(item.team)
    );
  }
  if (filters.remainingFilters?.length) {
    data = applyRemainingFilters(data, filters.remainingFilters);
  }
  return data;
};
const applyRemainingFilters = (data, remainingFilters) => {
  remainingFilters?.forEach((filter) => {
    if (filter.type === "number") {
      data = applyNumberFilter(data, filter);
    }
    if (filter.type === "string") {
      data = applyStringFilter(data, filter);
    }
    if (filter.type === "date") {
      data = applyDateFilter(data, filter);
    }
  });
  return data;
};
const loadItems = (options) => {
  loading.value = true;
  const { page, itemsPerPage } = options;
  pagination.page = page;
  pagination.itemsPerPage = itemsPerPage;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  let filteredData = applyFilters(mockData, sharedData.filterData);

  tableData.value = filteredData.slice(start, end);
  totalItems.value = filteredData.length;
  loading.value = false;
};

loadItems(pagination);
</script>

<style scoped>
::v-deep.custom-header .v-data-table__thead {
  background-color: var(--primary-background);
  color: #333;
  white-space: nowrap;
}
</style>
