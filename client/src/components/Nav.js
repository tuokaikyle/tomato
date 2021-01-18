import React, { useContext } from 'react';
import { GeneralContext } from '../App';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {
  const { dispatch } = useContext(GeneralContext);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav>
      <div className='nav-wrapper'>
        <a
          href='/'
          onClick={() => {
            dispatch({ type: 'NO_TASK' });
          }}
          className='brand-logo'
          style={{ marginLeft: '1em' }}
        >
          Tomato
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? (
            <>
              <li>Welcome, {user.nickname}</li>
              <li
                onClick={() => {
                  logout();
                }}
              >
                <a>Logout</a>
              </li>
            </>
          ) : (
            <li
              onClick={() => {
                loginWithRedirect();
              }}
            >
              <a>Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
