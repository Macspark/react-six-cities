import {Offer} from '../../types/offer';
import Card from '../card/card';

type CardsListProps = {
  offers: Offer[],
  activeOffer: Offer | undefined,
  setActiveOffer(newActiveOffer: Offer | undefined): void,
}

function CardsList({offers, activeOffer, setActiveOffer}: CardsListProps): JSX.Element {

  const mouseOverHandler = (offer: Offer) => {
    if (activeOffer === offer) {
      return;
    }
    setActiveOffer(offer);
  };

  const mouseLeaveHandler = () => {
    setActiveOffer(undefined);
  };

  return (
    <>
      {
        offers
          .map((offer) => (
            <article onMouseOver={() => mouseOverHandler(offer)} onMouseLeave={() => mouseLeaveHandler()} key={offer.id} className="cities__card place-card">
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
