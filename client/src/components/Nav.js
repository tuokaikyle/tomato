import React, { useContext } from 'react';
import { GeneralContext } from '../App';

const Nav = () => {
  const { dispatch } = useContext(GeneralContext);

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo' style={{ marginLeft: '1em' }}>
          Tomato
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li
            onClick={() => {
              dispatch({ type: 'NO_TASK' });
            }}
          >
            <a href='#'>Index</a>
          </li>
          <li>
            <a
              href='https://czarto.com/2012/04/24/four-quadrants-of-time/'
              target='_blank'
            >
              Inspired By
            </a>
          </li>
          {/* <li>
            <a
              href='https://materializecss.com/getting-started.html'
              target='_blank'
              rel='noreferrer'
            >
              Materialize
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
