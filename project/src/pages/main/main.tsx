import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import {getOffersInCity, getSortedOffers} from '../../utils';
import {SortType} from '../../const';
import {useState} from 'react';
import {Offer} from '../../types/offer';

function MainScreen(): JSX.Element {
  const {offers, currentCity} = useAppSelector((state) => state);
  const [currentSortType, changeSortType] = useState(SortType.POPULAR);
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const offersInCity =
    getSortedOffers(
      getOffersInCity(offers, currentCity.name),
      currentSortType
    );

  const offerCount = offersInCity.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in Amsterdam</b>
              <Sort currentSortType={currentSortType} changeSortType={changeSortType} />
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={offersInCity} activeOffer={activeOffer} setActiveOffer={setActiveOffer} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} offers={offers} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
