import Header from '../../components/header/header';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewCardsList from '../../components/review-cards-list/review-cards-list';
import NotFoundScreen from '../../pages/not-found/not-found';
import Map from '../../components/map/map';
import CardsList from '../../components/cards-list/cards-list';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {getRatingWidth} from '../../util';
import {Review} from '../../types/review';

type PropertyScreenProps = {
  offers: Offer[],
  reviews: Review[],
}

function PropertyScreen({offers, reviews}: PropertyScreenProps): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const {id} = useParams();

  const currentOffer = offers.find((offer) =>
    offer.id.toString() === id
  );

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  const nearbyOffers = offers.slice(0, 3);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                currentOffer.images.map((item, index) => {
                  const key = `${index}-${item}`;
                  return (
                    <div key={key} className="property__image-wrapper">
                      <img className="property__image" src={item} alt="Studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                currentOffer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={`property__bookmark-button button ${currentOffer.isFavorite && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingWidth(currentOffer.rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {
                currentOffer.goods.length > 0 &&
                <div className="property__inside">
                  <h2 className="property__inside-title">What&rsquo;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      currentOffer.goods.map((item, index) => {
                        const key = `${index}-${item}`;
                        return (
                          <li key={key} className="property__inside-item">
                            {item}
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              }
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${currentOffer.host.isPro && ' property__avatar-wrapper--pro'}`}>
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {
                    currentOffer.host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewCardsList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={currentOffer.city} offers={nearbyOffers} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={nearbyOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default PropertyScreen;
