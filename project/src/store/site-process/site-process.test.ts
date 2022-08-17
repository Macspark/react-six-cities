import {DEFAULT_CITY} from '../../const';
import {createMockCity} from '../../utils/mocks';
import {changeCity, siteProcess} from './site-process';

const mockCity = createMockCity();

describe('Reducer: siteProcess', () => {

  it('without parameters, should return default city', () => {
    expect(siteProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({currentCity: DEFAULT_CITY});
  });
  
  it('change city, should return state with new city', () => {
    const state = {currentCity: DEFAULT_CITY};
    expect(siteProcess.reducer(state, changeCity(mockCity)))
      .toEqual({currentCity: mockCity});
  });
});
