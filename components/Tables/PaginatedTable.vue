<template>
  <table-action />
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="tableHeader"
    :items="tableData"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
    class="custom-header mt-5"
  ></v-data-table-server>
</template>

<script setup>
import TableAction from "~/components/Tables/TableAction.vue";
import { ref, reactive, inject } from "vue";
import { tableData as mockData, headerData } from "~/mock-data/tableData.js";
const sharedData = inject("sharedData");
const tableHeader = headerData;
const itemsPerPage = ref(10);
const loading = ref(false);
const totalItems = ref(mockData.length);
const tableData = ref([]);

const pagination = reactive({
  page: 1,
  itemsPerPage: itemsPerPage.value,
});

const loadItems = (options) => {
  loading.value = true;
  const { page, itemsPerPage } = options;
  pagination.page = page;
  pagination.itemsPerPage = itemsPerPage;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  tableData.value = mockData.slice(start, end);
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
