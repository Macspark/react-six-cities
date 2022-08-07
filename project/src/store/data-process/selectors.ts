import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].currentOffer;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;

export const getOffersInCurrentCity = (state: State): Offer[] =>
  state[NameSpace.Data].offers.filter((offer) =>
    offer.city.name === state[NameSpace.Site].currentCity.name
  );
