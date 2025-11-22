import { UserRole } from '../../types/acl.types'

const ROLE_HOME_ROUTES: Record<UserRole, string> = {
  [UserRole.ADMIN]: '/dashboards/analytics',
  [UserRole.MANAGER]: '/dashboards/analytics',
  [UserRole.EDITOR]: '/dashboards/analytics',
  [UserRole.CLIENT]: '/acl',
  [UserRole.VIEWER]: '/dashboards/analytics'
}


const DEFAULT_HOME_ROUTE = '/dashboards/analytics'

const getHomeRoute = (role: UserRole | string): string => {
  const homeRoute = ROLE_HOME_ROUTES[role as UserRole]
  
  return homeRoute || DEFAULT_HOME_ROUTE
}

export default getHomeRoute

export const shouldRedirectToACL = (role: UserRole | string): boolean => {
  return role === UserRole.CLIENT
}

export const getAllHomeRoutes = (): string[] => {
  return Object.values(ROLE_HOME_ROUTES)
}

export const navigateToHome = (
  role: UserRole | string, 
  router: { push: (path: string) => void }
): void => {
  const homeRoute = getHomeRoute(role)
  router.push(homeRoute)
}