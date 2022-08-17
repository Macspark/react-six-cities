import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites/favorites';
import LoginScreen from '../../pages/login/login';
import MainScreen from '../../pages/main/main';
import PropertyScreen from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found/not-found';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {getAuthStatus} from '../../store/user-process/selectors';
import {getLoadedDataStatus} from '../../store/data-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element={<PropertyScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
