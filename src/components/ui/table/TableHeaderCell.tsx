import React from 'react'
import { cn } from '../../../utils/cn'
import type { TableHeaderCellProps } from './Table.type'

const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ className, align = 'left', sortable, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'px-6 py-3 text-left text-xs font-medium',
        'text-text-secondary dark:text-text-secondary',
        'uppercase tracking-wider',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        sortable && 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <svg
            className="w-4 h-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        )}
      </div>
    </th>
  )
)

TableHeaderCell.displayName = 'TableHeaderCell'

export default TableHeaderCell