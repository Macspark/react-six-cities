import {Offer} from './types/offer';

export const sortOffersByCity = (offers: Offer[]): Record<string, Offer[]> => {
  const offersByCity: Record<string, Offer[]> = {};

  offers.forEach((offer) => {
    const city: string = offer.city.name;

    if (Object.keys(offersByCity).includes(city)) {
      offersByCity[city].push(offer);
    } else {
      offersByCity[city] = [offer];
    }

  });

  return offersByCity;
};

export const getOffersInCity = (offers: Offer[], city: string) => (
  offers.filter((offer) => offer.city.name === city)
);
