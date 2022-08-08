import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferByIdAction, fetchOffersAction, fetchReviewsAction, postReviewAction, toggleFavoriteAction} from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  isDataLoaded: false,
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  favoriteOffers: [],
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
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);

        if (index === -1) {
          throw new Error('Can\'t update unexisting movie');
        }

        state.offers = [
          ...state.offers.slice(0, index),
          updatedOffer,
          ...state.offers.slice(index + 1),
        ];

        if (state.currentOffer && state.currentOffer.id === updatedOffer.id) {
          state.currentOffer = updatedOffer;
        }
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});
