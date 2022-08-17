import {createMockCity, createMockOffer, createMockReview} from '../../utils/mocks';
import { fetchOffersAction } from '../api-actions';
import {dataProcess} from './data-process';

const mockCity = createMockCity()
const mockOffer = createMockOffer();
const mockReview = createMockReview();

describe('Reducer: siteProcess', () => {

  it('without parameters, should return initial state', () => {
    expect(dataProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        currentOffer: null,
        nearbyOffers: [],
        reviews: [],
        favoriteOffers: [],
      });
  });

  it('without parameters, should return initial state', () => {
    expect(dataProcess.reducer(state, {type: fetchOffersAction}))
      .toEqual({
        offers: [],
        isDataLoaded: false,
        currentOffer: null,
        nearbyOffers: [],
        reviews: [],
        favoriteOffers: [],
      });
  });
});
