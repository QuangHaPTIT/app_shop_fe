import React from 'react'
import { cn } from '../../../utils/cn'
import { InputProps } from './input.type'


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    fullWidth,
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = 'block w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const stateStyles = error
      ? 'border-error-main focus:border-error-main focus:ring-error-main'
      : 'border-gray-300 dark:border-gray-600 focus:border-primary-main focus:ring-primary-main'
    
    const paddingStyles = leftIcon 
      ? (rightIcon ? 'pl-10 pr-10 py-2.5' : 'pl-10 pr-4 py-2.5')
      : (rightIcon ? 'pl-4 pr-10 py-2.5' : 'px-4 py-2.5')
    
    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={cn(
              baseStyles,
              stateStyles,
              paddingStyles,
              'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
              'placeholder:text-gray-400 dark:placeholder:text-gray-500',
              className
            )}
            disabled={disabled}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-sm text-error-main">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
export type { InputProps } from './input.type'