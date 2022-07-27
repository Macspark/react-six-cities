import {Offer} from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteCardsListProps = {
  offers: Offer[];
}

function FavoriteCardsList({offers}: FavoriteCardsListProps): JSX.Element {
  const offersByCity: Record<string, Offer[]> = {};

  offers.forEach((offer) => {
    const city: string = offer.city.name;

    if (city in offersByCity) {
      offersByCity[city].push(offer);
    } else {
      offersByCity[city] = [offer];
    }
  });

  return (
    <>
      {
        Object.keys(offersByCity).map((cityName: string) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/#">
                  <span>{cityName}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {
                offersByCity[cityName].map((offer: Offer) => (
                  <FavoriteCard key={offer.id} offer={offer} />
                ))
              }
            </div>
          </li>
        ))

      }
    </>
  );
}

export default FavoriteCardsList;
