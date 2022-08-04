import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {City} from '../../types/map';

export const getCurrentCity = (state: State): City => state[NameSpace.Site].currentCity;
