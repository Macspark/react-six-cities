export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Login = '/login',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
