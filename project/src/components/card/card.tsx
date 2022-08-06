import {Offer} from '../../types/offer';
import {Link, useNavigate} from 'react-router-dom';
import {getRatingWidth} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthStatus} from '../../store/user-process/selectors';
import {toggleFavoriteAction} from '../../store/api-actions';
import React from 'react';

type CardProps = {
  offer: Offer;
}

function Card({offer}: CardProps): JSX.Element {
  const ratingWidth = getRatingWidth(offer.rating);
  const offerLink = `/offer/${offer.id}`;
  const authorizationStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(toggleFavoriteAction({
      offerId: offer.id.toString(),
      isFavorite: +!offer.isFavorite,
    }));
  };

  return (
    <>
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerLink}>
          <img className="place-card__image" src="img/apartment-03.jpg" width={260} height={200} alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button onClick={handleFavoriteClick} className={`place-card__bookmark-button button ${offer.isFavorite && 'place-card__bookmark-button--active'}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </>
  );
}

export default React.memo(Card);
