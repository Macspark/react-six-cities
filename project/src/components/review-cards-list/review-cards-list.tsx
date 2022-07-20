import {Review} from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewCardsListProps = {
  reviews: Review[];
}

function ReviewCardsList({reviews}: ReviewCardsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) =>
            <ReviewCard key={review.id} review={review} />
          )
        }
      </ul>
    </>
  );
}

export default ReviewCardsList;
