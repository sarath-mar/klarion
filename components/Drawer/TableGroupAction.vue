<template>
  <div>
    <table-option-selector :action-type="TABLE_ACTION.GROUP" />
  </div>
</template>
<script setup>
import { TABLE_ACTION } from "~/utils/constants.js";

import TableOptionSelector from "~/components/Drawer/TableOptionSelector.vue";
const components = {
  TableOptionSelector,
};
</script>
<style scoped></style>
