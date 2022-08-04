import {AuthorizationStatus} from '../const.js';
import {store} from '../store/index.js';
import {City} from './map.js';
import {Offer} from './offer.js';
import {Review} from './review.js';
import {UserData} from './user-data.js';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData | null,
};

export type DataProcess = {
  offers: Offer[],
  isDataLoaded: boolean,
  currentOffer: Offer | null,
  nearbyOffers: Offer[],
  reviews: Review[],
}

export type SiteProcess = {
  currentCity: City,
}