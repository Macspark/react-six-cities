import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {SortType} from '../../const';
import React, {useMemo, useState} from 'react';
import {Offer} from '../../types/offer';
import {getOffersInCurrentCity} from '../../store/data-process/selectors';
import {getCurrentCity} from '../../store/site-process/selectors';
import {sortOffers} from '../../utils';

function MainScreen(): JSX.Element {
  const [currentSortType, changeSortType] = useState(SortType.POPULAR);
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const offers = useAppSelector(getOffersInCurrentCity);

  const currentCity = useAppSelector(getCurrentCity);
  const sortedOffers = useMemo(() =>
    sortOffers(
      offers,
      currentSortType
    ),
  [offers, currentSortType]);

  const offerCount = sortedOffers.length;

  const cardsListTemplate = useMemo((): JSX.Element => (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offerCount} places to stay in {currentCity.name}</b>
        <Sort currentSortType={currentSortType} changeSortType={changeSortType} />
        <div className="cities__places-list places__list tabs__content">
          <CardsList offers={sortedOffers} activeOffer={activeOffer} setActiveOffer={setActiveOffer} />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={currentCity} offers={sortedOffers} activeOffer={activeOffer} />
        </section>
      </div>
    </div>
  ), [currentCity, sortedOffers, currentSortType, offerCount, activeOffer]);

  const emptyCardsListTemplate: JSX.Element = (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCity.name}</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${sortedOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity} />
          </section>
        </div>
        <div className="cities">
          {
            sortedOffers.length ?
              cardsListTemplate : emptyCardsListTemplate
          }
        </div>
      </main>
    </div>
  );
}

export default React.memo(MainScreen);
