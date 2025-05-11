<template>
  <v-row class="mb-3 align-center" v-if="groupData.field">
    <v-col cols="8">
      <v-text-field
        v-model="groupData.displayName"
        density="compact"
        variant="outlined"
        hide-details
        readonly
      ></v-text-field>
    </v-col>
    <v-col cols="4">
      <v-row class="align-center ga-3 no-wrap">
        <v-select
          v-model="groupData.orderBy"
          density="compact"
          variant="outlined"
          :items="sortOptions"
          item-value="key"
          item-title="displayName"
          hide-details
        >
          <template #prepend-inner>
            <Icon :name="iconName" /> </template
        ></v-select>
        <Icon
          name="mdi-close"
          class="c-pointer mr-1"
          size="20"
          @click="removeGroup"
        />
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({
      field: "",
      orderBy: "asc",
      displayName: "",
    }),
  },
});
const sortOptions = [
  { displayName: "Ascending", key: "asc" },
  { displayName: "Descending", key: "desc" },
];

const iconName = computed(() => {
  return props.groupData.orderBy === "asc"
    ? "mdi-sort-ascending"
    : "mdi-sort-descending";
});
const removeGroup = () => {
  props.groupData.field = "";
  props.groupData.orderBy = "asc";
  props.groupData.displayName = "";
};
</script>

<style scoped>
/* Add your component styles here */
</style>
