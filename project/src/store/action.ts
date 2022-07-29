import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map';
import {Offer} from '../types/offer';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction<Offer[]>('loadOffers');

export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
