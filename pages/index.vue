<template>
  <div class="pa-6">
    <paginated-table />
  </div>
</template>

<script setup>
import PaginatedTable from "~/components/Tables/PaginatedTable.vue";

defineProps({});
defineEmits([]);

const components = {
  PaginatedTable,
};
</script>

<style lang="scss" scoped></style>
