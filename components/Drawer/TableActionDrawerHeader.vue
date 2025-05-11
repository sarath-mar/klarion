<template>
  <div class="d-flex align-center ga-1">
    <Icon size="20" :name="selectedAction?.icon" />
    <p class="font-small">{{ selectedAction?.name }}</p>
  </div>
  <v-btn variant="text" icon class="float-right" @click="closeDrawer">
    <Icon
      size="25"
      :name="
        $vuetify.display.mobile
          ? 'mdi-chevron-down-circle'
          : 'mdi-chevron-right-circle'
      "
    />
  </v-btn>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const props = defineProps({
  selectedAction: {
    type: Object,
    required: false,
  },
});
const emit = defineEmits(["drawerClosed"]);
function closeDrawer() {
  emit("drawerClosed");
}
</script>

<style scoped>

</style>
