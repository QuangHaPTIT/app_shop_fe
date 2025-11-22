import { AbilityBuilder, Ability } from '@casl/ability'
import { UserRole, Subject, Actions } from 'src/types/acl.types'

export type Subjects = string
export type AppAbility = Ability<[Actions, Subjects]> | undefined

export const AppAbility = Ability as any

export type ACLObj = {
  action: Actions
  subject: string
}


const defineRulesFor = (role: string) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  switch(role) {
    case UserRole.ADMIN:
      can('manage', Subject.ALL)
      break

    case UserRole.MANAGER:
      can('manage', Subject.DASHBOARD)
      can('manage', Subject.USER)
      can('read', Subject.REPORT)
      can('read', Subject.ORDER)
      break

    case UserRole.EDITOR:
      can('manage', Subject.PRODUCT)
      can('manage', Subject.ORDER)
      can('read', Subject.DASHBOARD)
      break

    case UserRole.CLIENT:
      can('read', Subject.ACL_PAGE)
      break

    case UserRole.VIEWER:
      can('read', Subject.DASHBOARD)
      can('read', Subject.REPORT)
      break

    default:
      // Mặc định: không có quyền gì
      break
  }

  return rules
}

/**
 * Create ability instance from role
 * @param role - Role của user
 * @returns Ability instance
 */
export const buildAbilityFor = (role: string): AppAbility => {
  return new AppAbility(defineRulesFor(role), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object!.type
  })
}

/**
 * Default ACL object for pages that do not define ACL
 */
export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: Subject.ALL
}

export default defineRulesFor