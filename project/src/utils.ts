import {Offer} from './types/offer';
import {SortType} from './const';
import dayjs from 'dayjs';

const RATING_STAR_WIDTH = 20;

export const getHumanMonthYear = (date: string) => date ? dayjs(date).format('MMMM YYYY') : '';

export const getRatingWidth = (rating: number): string => `${Math.round(rating) * RATING_STAR_WIDTH}%`;

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
