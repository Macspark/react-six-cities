import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchNearbyOffersAction, fetchOfferByIdAction, fetchOffersAction, fetchReviewsAction, postReviewAction} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  isDataLoaded: false,
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
};

export const dataProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
