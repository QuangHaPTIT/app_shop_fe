import React from 'react'
import { cn } from '../../../utils/cn'
import type { TableCellProps } from './Table.type'

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align = 'left', ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        'px-6 py-4 whitespace-nowrap text-sm',
        'text-text-primary dark:text-text-primary',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
      {...props}
    />
  )
)

TableCell.displayName = 'TableCell'

export default TableCell