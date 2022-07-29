import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, setDataLoadedStatus} from './action';
import {DEFAULT_CITY} from '../const';
import {City} from '../types/map';
import {Offer} from '../types/offer';

type InitialState = {
  currentCity: City,
  offers: Offer[],
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
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
    });
});

export {reducer};
