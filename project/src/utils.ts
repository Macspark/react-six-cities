import {Offer} from './types/offer';
import {SortType} from './const';

export const getOffersInCity = (offers: Offer[], city: string) => (
  offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = (offers: Offer[], currentSortType: string) => {
  switch (currentSortType) {
    case SortType.POPULAR:
      return offers;

    case SortType.PRICE_LOW_TO_HIGH:
      return offers.sort((offerA, offerB) => (
        offerA.price - offerB.price
      ));

    case SortType.PRICE_HIGH_TO_LOW:
      return offers.sort((offerA, offerB) => (
        offerB.price - offerA.price
      ));

    case SortType.TOP:
      return offers.sort((offerA, offerB) => (
        offerB.rating - offerA.rating
      ));

    default:
      return offers;
  }
};
