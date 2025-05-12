<template>
  <div class="pa-6">
   <paginated-table />
  </div>
</template>

<script setup>
import { provide, reactive } from "vue";
import PaginatedTable from "~/components/Tables/PaginatedTable.vue";

const sharedData = reactive({
  filterData: {},
  groupData: {},
  selectedColumns: [],
});

provide("sharedData", sharedData);

const components = {
  PaginatedTable,
};
</script>

<style lang="scss" scoped></style>
