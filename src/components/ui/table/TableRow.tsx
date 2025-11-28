import React from 'react'
import { cn } from '../../../utils/cn'
import type { TableRowProps } from './Table.type'

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, hoverable, selected, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'transition-colors',
        hoverable && 'hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer',
        selected && 'bg-primary-main/10 dark:bg-primary-main/20',
        className
      )}
      {...props}
    />
  )
)

TableRow.displayName = 'TableRow'

export default TableRow