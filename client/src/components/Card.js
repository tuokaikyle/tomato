import React, { useContext } from 'react';
import { GeneralContext } from '../App';
import { groupNames } from '../utils/utils';

const Card = ({ props }) => {
  const { bgc, content, group } = props;
  const { state, dispatch } = useContext(GeneralContext);

  const active = groupNames.filter((i) => i.shortName === group)[0];
  const colorReplace = bgc.slice(11).replace('lighten-4', '');

  return (
    <div
      className={bgc}
      style={{ height: '22em', width: '20em', marginInline: '1em' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1em',
        }}
      >
        <h6>{active.fullName}</h6>
        <a className={`${colorReplace} btn-floating waves-effect waves-light`}>
          <i
            className='material-icons'
            onClick={() => {
              dispatch({
                type: 'ADDING',
                payload: active.shortName,
              });
            }}
          >
            add
          </i>
        </a>
      </div>

      <span className='white-text'>
        {content.map((i, key) => (
          <div key={key}>
            <a
              className={`${colorReplace} waves-effect waves-light btn`}
              style={{
                width: '100%',
                textTransform: 'capitalize',
                textAlign: 'left',
                overflow: 'hidden',
                marginBottom: '5px',
              }}
              onClick={() => {
                dispatch({
                  type: 'READ',
                  payload: {
                    items: i,
                  },
                });
              }}
            >
              {i.title}
            </a>
          </div>
        ))}
      </span>
    </div>
  );
};

export default Card;
