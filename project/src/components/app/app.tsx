import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites/favorites';
//import FavoritesEmptyScreen from '../../pages/favorites-empty/favorites-empty';
import LoginScreen from '../../pages/login/login';
import MainScreen from '../../pages/main/main';
//import MainEmptyScreen from '../../pages/main-empty/main-empty';
import PropertyScreen from '../../pages/property/property';
//import PropertyNotLoggedScreen from '../../pages/property-not-logged/property-not-logged';
import NotFoundScreen from '../../pages/not-found/not-found';
import {Offer} from '../../types/offer';

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} />}
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
              authorizationStatus={AuthorizationStatus.NoAuth}
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
    </BrowserRouter>
  );
}

export default App;
