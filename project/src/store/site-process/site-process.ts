import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY} from '../../const';
import {SiteProcess} from '../../types/state';

const initialState: SiteProcess = {
  currentCity: DEFAULT_CITY,
};

export const siteProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.currentCity = action.payload;
    }
  },
});

export const {changeCity} = siteProcess.actions;
