export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
  MANAGER = 'manager',
  EDITOR = 'editor',
  VIEWER = 'viewer'
}

export enum Subject {
  ALL = 'all',
  ACL_PAGE = 'acl-page',
  DASHBOARD = 'dashboard',
  USER = 'user',
  PRODUCT = 'product',
  ORDER = 'order',
  REPORT = 'report',
  SETTINGS = 'settings'
}

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'
