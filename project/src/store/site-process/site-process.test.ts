import {DEFAULT_CITY} from '../../const';
import {siteProcess} from './site-process';

describe('Reducer: sitePricess', () => {
  it('without parameters', () => {
    expect(siteProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'})).
      toEqual({currentCity: DEFAULT_CITY});
  });
});
