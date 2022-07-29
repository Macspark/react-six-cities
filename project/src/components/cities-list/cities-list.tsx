import {CITIES} from '../../const';
import {City} from '../../types/map';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import React from 'react';

type CitiesListProps = {
  currentCity: City,
}

function CitiesList({currentCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    const city: string = evt.currentTarget.innerText;
    if (city in CITIES) {
      dispatch(changeCity(CITIES[city]));
    }
  };

  return (
    <ul className="locations__list tabs__list">
      {
        Object.keys(CITIES).map((item, index) => {
          const key = `${index}-${item}`;
          return (
            <li key={key} className="locations__item">
              <a onClick={handleCityChange} className={`locations__item-link tabs__item ${currentCity.name === item && 'tabs__item--active'}`} href="/#">
                <span>{item}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default CitiesList;
