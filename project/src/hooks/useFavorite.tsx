import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '.';
import {AppRoute, AuthorizationStatus} from '../const';
import {toggleFavoriteAction} from '../store/api-actions';
import {getAuthStatus} from '../store/user-process/selectors';
import {Offer} from '../types/offer';

export const useFavorite = (offer: Offer | null) => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!offer) {
    return;
  }

  return () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(toggleFavoriteAction({
      offerId: offer.id.toString(),
      isFavorite: +!offer.isFavorite,
    }));
  };
};
