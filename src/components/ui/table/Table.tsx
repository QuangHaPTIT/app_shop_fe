import React from 'react'
import { cn } from '../../../utils/cn'
import type { TableProps } from './Table.type'

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, striped, hoverable, bordered, compact, ...props }, ref) => {
    return (
      <div className="overflow-x-auto">
        <table
          ref={ref}
          className={cn(
            'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
            bordered && 'border border-gray-200 dark:border-gray-700',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Table.displayName = 'Table'

export default Table