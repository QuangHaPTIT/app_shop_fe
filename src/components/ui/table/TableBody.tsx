import React from 'react'
import { cn } from '../../../utils/cn'
import type { TableBodyProps } from './Table.type'

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, striped, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn(
        'bg-bg-paper dark:bg-bg-paper divide-y divide-gray-200 dark:divide-gray-700',
        striped && '[&>tr:nth-child(even)]:bg-gray-50 [&>tr:nth-child(even)]:dark:bg-gray-800',
        className
      )}
      {...props}
    />
  )
)

TableBody.displayName = 'TableBody'

export default TableBody