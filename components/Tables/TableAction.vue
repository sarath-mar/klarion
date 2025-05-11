<template>
  <div>
    <div class="d-flex justify-end ga-5">
      <div
        v-for="(action, i) in actionData"
        :key="i"
        class="d-flex align-center ga-1 c-pointer"
        @click="triggerDrawer(action)"
      >
        <Icon :name="action.icon" class="" />
        <p class="font-small action-text">{{ action.name }}</p>
      </div>
    </div>
    <table-action-drawer
      :selected-action="selectedAction"
      :show-drawer="showDrawer"
      @drawer-closed="drawerClosed"
    />
  </div>
</template>

<script setup>
import { TABLE_ACTION } from '~/utils/constants.js';
import TableActionDrawer from "~/components/Drawer/TableActionDrawer.vue";
const components = {
  TableActionDrawer,
};
const actionData = [
  {
    icon: "mdi-filter-variant",
    name: "Filters",
    value: TABLE_ACTION.FILTER,
  },
  {
    icon: "mdi-code-equal",
    name: "Group",
    value: TABLE_ACTION.GROUP,
  },
//   {
//     icon: "mdi-dip-switch",
//     name: "Select Columns",
//   },
//   {
//     icon: "mdi-tray-arrow-down",
//     name: "Download",
//   },
];
const showDrawer = ref(false);
const selectedAction = ref(null);
const triggerDrawer = (action) => {
  console.log(action, "t");
  selectedAction.value = action;
  showDrawer.value = true;
};
const drawerClosed = () => {
  showDrawer.value = false;
};
</script>

<style  scoped>
.action-text{
    white-space: nowrap;
}
</style>
