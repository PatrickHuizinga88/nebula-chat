<script setup lang="ts">
import Page from "~/components/layout/Page.vue";
import type {Document} from "~/types";
import DataTable from "~/components/documents/DataTable.vue";
import {columns} from "~/components/documents/columns";

const documents: Document[] = [
  {
    id: '1',
    title: 'Document 1',
    createdAt: '2024-03-22',
  },
  {
    id: '2',
    title: 'Document 2',
    createdAt: '2024-03-23',
  },
  {
    id: '3',
    title: 'Document 3',
    createdAt: '2024-03-24',
  },
  {
    id: '4',
    title: 'Document 4',
    createdAt: '2024-03-25',
  },
  {
    id: '5',
    title: 'Document 5',
    createdAt: '2024-03-26',
  },
]
</script>

<template>
  <Page>
<!--    <Table>-->
<!--      <TableHeader>-->
<!--        <TableRow>-->
<!--          <TableHead>Title</TableHead>-->
<!--          <TableHead>Created at</TableHead>-->
<!--          <TableHead></TableHead>-->
<!--        </TableRow>-->
<!--      </TableHeader>-->
<!--      <TableBody>-->
<!--        <TableRow v-for="document in documents">-->
<!--          <TableCell class="font-medium">-->
<!--            {{ document.title }}-->
<!--          </TableCell>-->
<!--          <TableCell>{{ document.createdAt }}</TableCell>-->
<!--          <TableCell class="text-right">-->

<!--          </TableCell>-->
<!--        </TableRow>-->
<!--      </TableBody>-->
<!--    </Table>-->
    <DataTable :data="documents" :columns="columns"/>
  </Page>
</template>

<style scoped>

</style>