import {ChangeEvent} from 'react';

type CommentFormStarScreenType = {
  handleChange(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void,
  ratingValue: string,
  isChecked: boolean,
}

function CommentFormStar({handleChange, ratingValue, isChecked}: CommentFormStarScreenType): JSX.Element {
  return (
    <>
      <input checked={isChecked} onChange={handleChange} className="form__rating-input visually-hidden" name="rating" defaultValue={ratingValue} id={`${ratingValue}-stars`} type="radio" />
      <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title={ratingValue}>
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default CommentFormStar;
