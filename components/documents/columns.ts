import { h } from 'vue'
import type {Document} from "~/types";
import {Button} from "~/components/ui/button";
import {ArrowDown} from "lucide-vue-next";
import DataTableDropdown from "~/components/documents/DataTableDropdown.vue";
import {Checkbox} from "~/components/ui/checkbox";
import {createColumnHelper} from '@tanstack/vue-table'

const columnHelper = createColumnHelper<Document>()

export const columns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
      'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => {
      return h(Checkbox, {
        'checked': row.getIsSelected(),
        'onUpdate:checked': value => row.toggleSelected(!!value),
        'ariaLabel': 'Select row',
      })
    },
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor('id', {
    enablePinning: true,
    header: 'ID',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('id')),
  }),
  columnHelper.accessor('title', {
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Title', h(ArrowDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'font-semibold' }, row.getValue('title')),
  }),
  columnHelper.accessor('createdAt', {
    header: () => h('div', { class: 'text-right' }, 'Created at'),
    cell: ({ row }) => {
      return h('div', { class: 'text-right' }, row.getValue('createdAt'))
    },
  }),
  columnHelper.display({
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const document = row.original

      return h('div', { class: 'relative' }, h(DataTableDropdown, {
        document,
      }))
    },
  }),
]