<template>
  <div>
    <table-option-selector
      :action-type="TABLE_ACTION.GROUP"
      @selection-change="onSelectionChange"
    />
    <table-group-by-field :group-data="groupData" />
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { TABLE_ACTION } from "~/utils/constants.js";

import TableOptionSelector from "~/components/Drawer/TableOptionSelector.vue";
const components = {
  TableOptionSelector,
};

const groupData = reactive({
  field: "",
  orderBy: "asc",
  displayName: "",
});
const onSelectionChange = (item) => {
  console.log(item);
  groupData.field = item.key;
  groupData.displayName = item.displayName;
};
</script>
<style scoped></style>
