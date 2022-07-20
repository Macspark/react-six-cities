import {Offer} from '../../types/offer';
import Card from '../card/card';
import {useState} from 'react';

type CardsListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardsListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

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
