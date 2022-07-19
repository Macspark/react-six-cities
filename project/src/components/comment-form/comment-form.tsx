import {useState, ChangeEvent} from 'react';
import CommentFormStar from '../comment-form-star/comment-form-star';

const RATING_VALUES = ['5', '4', '3', '2', '1'];

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    review: '',
    rating: '',
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_VALUES.map((item) => (
            <CommentFormStar key={item} handleChange={handleChange} ratingValue={item} isChecked={formData.rating === item} />
          ))
        }
      </div>
      <textarea onChange={handleChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
