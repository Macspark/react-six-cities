import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setDataLoadedStatus, setAuthStatus, loadCurrentOffer, loadNearbyOffers, loadReviews, loadUserData} from './action';
import {AuthorizationStatus, DEFAULT_CITY} from '../const';
import {City} from '../types/map';
import {Offer} from '../types/offer';
import { Review } from '../types/review';
import { UserData } from '../types/user-data';

type InitialState = {
  currentCity: City,
  offers: Offer[],
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  currentOffer: Offer | null,
  nearbyOffers: Offer[],
  reviews: Review[],
  userData: UserData | null,
}

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
