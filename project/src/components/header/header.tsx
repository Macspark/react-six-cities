import React, { useMemo } from 'react';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {getAuthStatus, getUserData} from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);

  const dispatch = useAppDispatch();

  const loggedUserTemplate = useMemo((): JSX.Element => (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/favorites">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userData && userData.email ? userData.email : 'Unknown user'}</span>
          <span className="header__favorite-count">0</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to="/"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  ),
  [userData, dispatch]);

  const loginTemplate: JSX.Element = (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to="/login">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth ?
                  loggedUserTemplate : loginTemplate
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}

export default React.memo(Header);
