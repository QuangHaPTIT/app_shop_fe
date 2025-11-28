import { TableHTMLAttributes, HTMLAttributes } from 'react'

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  striped?: boolean
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean
  selected?: boolean
}

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
}

export interface TableHeaderCellProps extends HTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}