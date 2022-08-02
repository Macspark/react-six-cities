import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Offer} from '../types/offer';
import {dropToken, saveToken} from '../services/token';
import {loadOffers, setAuthStatus, setDataLoadedStatus, redirectToRoute, loadCurrentOffer, loadReviews, loadNearbyOffers} from './action';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import { Review, ReviewPostData } from '../types/review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra:api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferByIdAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOfferById',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offer}${offerId}`);
    dispatch(setDataLoadedStatus(false));
    dispatch(loadCurrentOffer(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offer}${offerId}${APIRoute.Nearby}`);
    dispatch(setDataLoadedStatus(false));
    dispatch(loadNearbyOffers(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}${offerId}`);
    dispatch(setDataLoadedStatus(false));
    dispatch(loadReviews(data));
    dispatch(setDataLoadedStatus(true));
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewPostData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postReview',
  async ({offerId, formData}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Reviews}${offerId}`, formData);
    dispatch(loadReviews(data));
  },
);
