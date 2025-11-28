import React from 'react'
import { cn } from '../../../utils/cn'
import type { TableHeaderProps } from './Table.type'

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        'bg-[var(--color-table-header-bg-light)] dark:bg-[var(--color-table-header-bg-dark)]',
        className
      )}
      {...props}
    />
  )
)

TableHeader.displayName = 'TableHeader'

export default TableHeader