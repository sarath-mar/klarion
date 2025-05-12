<template>
  <v-layout>
    <v-navigation-drawer
      persistent
      temporary
      :width="650"
      :model-value="showDrawer"
      :location="$vuetify.display.mobile ? 'bottom' : 'end'"
    >
      <table-action-card>
        <template #header>
          <table-action-drawer-header
            :selected-action="selectedAction"
            @drawer-closed="closeDrawer"
          />
        </template>

        <template #content>
          <table-filter-action
            v-if="selectedAction?.value === TABLE_ACTION.FILTER"
            :filter-data="filterData"
          />
          <table-group-action
            v-else-if="selectedAction?.value === TABLE_ACTION.GROUP"
            :group-data="groupData"
          />
          <div class="d-flex justify-end ga-2">
            <v-btn
              size="small"
              class="text-none font-small"
              @click="closeDrawer"
              >Cancel</v-btn
            >
            <v-btn
              size="small"
              class="text-none apply-btn secondary-bg-color font-small"
              @click="onApplyClick"
              >Apply</v-btn
            >
          </div>
        </template>
      </table-action-card>
    </v-navigation-drawer>
  </v-layout>
</template>

<script setup>
import { defineProps, defineEmits, inject } from "vue";
import { TABLE_ACTION } from "~/utils/constants.js";
import TableActionCard from "~/layouts/TableActionCard.vue";
import TableActionDrawerHeader from "~/components/Drawer/TableActionDrawerHeader.vue";
import TableFilterAction from "~/components/TableFilter/TableFilterAction.vue";
import TableGroupAction from "~/components/TableGroup/TableGroupAction.vue";
const components = {
  TableActionCard,
  TableActionDrawerHeader,
  TableFilterAction,
};
const props = defineProps({
  showDrawer: {
    type: Boolean,
    required: true,
    default: false,
  },
  selectedAction: {
    type: Object,
    required: false,
  },
});
const emit = defineEmits(["drawerClosed"]);
const sharedData = inject("sharedData");
const filterData = reactive({
  selectedFilterIssueType: [],
  selectedFilterTeams: [],
  remainingFilters: new Map(),
});
const groupData = reactive({
  field: "",
  orderBy: "asc",
  displayName: "",
});
const onApplyClick = () => {
  sharedData.filterData = JSON.parse(
    JSON.stringify({
      ...filterData,
      remainingFilters: Array.from(filterData.remainingFilters.values()),
    })
  );
  sharedData.groupData = groupData;
  closeDrawer(true);
};
function closeDrawer(isApply=false) {
  emit("drawerClosed",{isApply,type: props.selectedAction?.value});
}
</script>

<style scoped>
.apply-btn {
  color: var(--secondary-text-color);
}
</style>
