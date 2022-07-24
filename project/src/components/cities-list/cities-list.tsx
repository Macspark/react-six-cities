import {CITIES} from '../../const';
import {City} from '../../types/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { changeCity } from '../../store/action';

type CitiesListProps = {
  currentCity: City,
}

function CitiesList({currentCity}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityChange = (evt: any) => {
    const city: string = evt.target.innerText;
    if (city in CITIES) {
      dispatch(changeCity({city: CITIES[city]}))
    }
  }

  return (
    <ul className="locations__list tabs__list">
      {
       Object.keys(CITIES).map((item) => {
        return (
          <li className="locations__item">
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
