import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setDataLoadedStatus, setAuthStatus} from './action';
import {AuthorizationStatus, DEFAULT_CITY} from '../const';
import {City} from '../types/map';
import {Offer} from '../types/offer';

type InitialState = {
  currentCity: City,
  offers: Offer[],
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
}

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
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
    });
});

export {reducer};
