<template>
  <div>
    <v-card
      class="action-app-bar py-3 px-4 d-flex align-center justify-space-between"
    >
      <slot name="header"></slot>
    </v-card>
    <div class="py-3 px-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.action-app-bar {
  background-color: var(--primary-background) !important;
}
</style>
