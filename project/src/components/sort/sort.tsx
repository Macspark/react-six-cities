import {useState} from 'react';
import {SortType} from '../../const';

type SortProps = {
  currentSortType: string,
  changeSortType(newSortType: string): void,
}

function Sort({currentSortType, changeSortType}: SortProps): JSX.Element {
  const [isFormOpened, toggleForm] = useState(false);

  const mouseEnterHandler = () => {
    toggleForm(true);
  };

  const mouseLeaveHandler = () => {
    toggleForm(false);
  };

  const clickHandler = (evt: React.MouseEvent<HTMLLIElement>) => {
    changeSortType(evt.currentTarget.innerText);
  };

  return (
    <form onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isFormOpened && 'places__options--opened'}`}>
        {
          Object.keys(SortType).map((item, index) => {
            const key = `${index}-${item}`;
            const isActive = currentSortType === SortType[item];
            return (
              <li onClick={clickHandler} key={key} className={`places__option ${isActive && 'places__option--active'}`} tabIndex={0}>{SortType[item]}</li>
            );
          })
        }
      </ul>
    </form>
  );
}

export default Sort;
