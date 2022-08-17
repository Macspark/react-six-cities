import {Review} from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewCardsListProps = {
  reviews: Review[];
}

function ReviewCardsList({reviews}: ReviewCardsListProps): JSX.Element {
  const slicedReviews = reviews.slice(0, 10).sort((reviewA, reviewB) => reviewB.id - reviewA.id);

  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          slicedReviews.map((review) =>
            <ReviewCard key={review.id} review={review} />
          )
        }
      </ul>
    </>
  );
}

export default ReviewCardsList;
