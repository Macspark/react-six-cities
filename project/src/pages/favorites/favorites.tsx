import Header from '../../components/header/header';
import FavoriteCardsList from '../../components/favorite-cards-list/favorite-cards-list';
import FavoritesEmptyScreen from '../favorites-empty/favorites-empty';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/data-process/selectors';
import React from 'react';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);

  if (!offers || !offers.length) {
    return <FavoritesEmptyScreen />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteCardsList offers={offers} />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
}

export default React.memo(FavoritesScreen);
