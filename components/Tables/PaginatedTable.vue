<template>
  <table-action/>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="desserts"
    :items-length="totalItems"
    :loading="loading"
    item-value="name"
    @update:options="loadItems"
    class="custom-header mt-5"
  ></v-data-table-server>
</template>
<script setup>
import TableAction from "~/components/Tables/TableAction.vue";
const components = {
  TableAction,
}
const desserts = [
    {
      id: '1',
      title: 'Frozen Yogurt Issue',
      incident: 'Low Priority',
      endCustomer: 'Customer A',
      endUser: 'User X',
      status: 'Open',
    },
    {
      id: '2',
      title: 'Jelly Bean Issue',
      incident: 'High Priority',
      endCustomer: 'Customer B',
      endUser: 'User Y',
      status: 'Closed',
    },
    {
      id: '3',
      title: 'Ice Cream Sandwich Issue',
      incident: 'Medium Priority',
      endCustomer: 'Customer C',
      endUser: 'User Z',
      status: 'In Progress',
    },
    {
      id: '4',
      title: 'Eclair Issue',
      incident: 'Critical Priority',
      endCustomer: 'Customer D',
      endUser: 'User W',
      status: 'Open',
    },
    {
      id: '5',
      title: 'Cupcake Issue',
      incident: 'Low Priority',
      endCustomer: 'Customer E',
      endUser: 'User V',
      status: 'Resolved',
    },
    {
      id: '6',
      title: 'Donut Issue',
      incident: 'High Priority',
      endCustomer: 'Customer F',
      endUser: 'User U',
      status: 'Closed',
    },
  ]
 const itemsPerPage= 5
  const    headers= [
        {
          title: 'Issue Id',
          align: 'start',
          sortable: false,
          key: 'id',
        },
        { title: 'Issue Title', key: 'title', align: 'start' },
        { title: 'Incident', key: 'incident', align: 'start' },
        { title: 'End Customer', key: 'endCustomer', align: 'start' },
        { title: 'End User', key: 'endUser', align: 'start' },
        { title: 'Status', key: 'status', align: 'start' },
      ]
     const serverItems= []
     const loading= !true
     const totalItems= desserts.length
  
</script>
<style scoped>
::v-deep.custom-header .v-data-table__thead {
  background-color:var(--primary-background) ;
  color: #333;
}
</style>