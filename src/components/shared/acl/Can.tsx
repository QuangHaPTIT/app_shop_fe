import { createContext, useContext, ReactNode } from 'react'
import { AnyAbility } from '@casl/ability'
import { createContextualCan } from '@casl/react'

// Create Ability Context - do not use undefined to avoid type error
export const AbilityContext = createContext<AnyAbility>(undefined!)

// Create Can component for JSX usage
export const Can = createContextualCan(AbilityContext.Consumer)

/**
 * Provider component để wrap app
 */
interface AbilityProviderProps {
  ability: AnyAbility
  children: ReactNode
}

export const AbilityProvider = ({ ability, children }: AbilityProviderProps) => {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  )
}

/**
 * Hook to use ability in functional components
 * @throws Error if used outside AbilityProvider
 */
export const useAbility = (): AnyAbility => {
  const context = useContext(AbilityContext)
  
  if (!context) {
    throw new Error('useAbility must be used within AbilityProvider')
  }
  
  return context
}

/**
 * Hook for checking permissions easily
 */
export const usePermission = () => {
  const ability = useAbility()

  const can = (action: string, subject: string): boolean => {
    return ability.can(action, subject)
  }

  const cannot = (action: string, subject: string): boolean => {
    return ability.cannot(action, subject)
  }

  const canAny = (actions: string[], subject: string): boolean => {
    return actions.some(action => ability.can(action, subject))
  }

  const canAll = (actions: string[], subject: string): boolean => {
    return actions.every(action => ability.can(action, subject))
  }

  return { 
    can, 
    cannot, 
    canAny, 
    canAll, 
    ability 
  }
}

export default Can