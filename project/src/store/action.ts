import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/map';
import {Offer} from '../types/offer';
import {AuthorizationStatus, AppRoute} from '../const';
import {Review} from '../types/review';
import { UserData } from '../types/user-data';

export const changeCity = createAction<City>('site/changeCity');

export const loadUserData = createAction<UserData>('data/loadUserData');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const loadCurrentOffer = createAction<Offer>('data/loadCurrentOffer');

export const loadNearbyOffers = createAction<Offer[]>('data/loadNearbyOffers');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setAuthStatus = createAction<AuthorizationStatus>('user/setAuthStatus');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
