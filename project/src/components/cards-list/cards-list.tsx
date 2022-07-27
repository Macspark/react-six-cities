import {Offer} from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[],
  activeOffer: Offer | undefined,
  setActiveOffer(newActiveOffer: Offer): void,
}

function CardsList({offers, activeOffer, setActiveOffer}: CardsListProps): JSX.Element {

  const mouseOverHandler = (offer: Offer) => {
    if (activeOffer === offer) {
      return;
    }
    setActiveOffer(offer);
  };

  return (
    <>
      {
        offers
          .map((offer) => (
            <article onMouseOver={() => mouseOverHandler(offer)} key={offer.id} className="cities__card place-card">
              <Card
                offer={offer}
              />
            </article>
          ))
      }
    </>
  );
}

export default CardsList;
