import {City} from './types/map';

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

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments/',
  Nearby = '/nearby',
}

export const CITIES: Record<string, City> = {
  'Paris': {
    'location': {
      'latitude': 48.864716,
      'longitude': 2.349014,
      'zoom': 12,
    },
    'name': 'Paris',
  },
  'Cologne': {
    'location': {
      'latitude': 50.935173,
      'longitude': 6.953101,
      'zoom': 12,
    },
    'name': 'Cologne',
  },
  'Brussels': {
    'location': {
      'latitude': 50.850346,
      'longitude': 4.351721,
      'zoom': 12,
    },
    'name': 'Brussels',
  },
  'Amsterdam': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 12,
    },
    'name': 'Amsterdam',
  },
  'Hamburg': {
    'location': {
      'latitude': 53.551086,
      'longitude': 9.993682,
      'zoom': 12,
    },
    'name': 'Hamburg',
  },
  'Dusseldorf': {
    'location': {
      'latitude': 51.233334,
      'longitude': 6.783333,
      'zoom': 12,
    },
    'name': 'Dusseldorf',
  },
};

export const SortType: Record<string, string> = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP: 'Top rated first',
};

export const DEFAULT_CITY = CITIES.Paris;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_ACTIVE =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const BACKEND_URL = 'https://10.react.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Site = 'SITE',
}
