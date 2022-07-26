import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getOffers} from './action';
import {DEFAULT_CITY} from '../const';
import {offers} from '../mocks/offers';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    });
});

export {reducer};
