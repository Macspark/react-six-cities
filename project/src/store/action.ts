import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map';

export const changeCity = createAction<{city: City}>('changeCity');

export const getOffers = createAction('getOffers');
