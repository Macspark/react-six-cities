import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map';
import {Offer} from '../types/offer';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeCity = createAction<City>('site/changeCity');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setAuthStatus = createAction<AuthorizationStatus>('user/setAuthStatus');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
