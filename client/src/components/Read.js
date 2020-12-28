import React, { useState, useContext, useEffect, useRef } from 'react';
import { GeneralContext } from '../App';
import M from 'materialize-css';
import { getGroupName } from '../utils/utils';
import Edit from './Edit';
import Welcome from './Welcome';

const Read = () => {
  const { state, dispatch } = useContext(GeneralContext);

  const [group, setGroup] = useState('');
  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  const deleteOne = async (e) => {
    e.preventDefault();
    try {
      const result = await (
        await fetch('/deletetomato', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: state.current._id }),
        })
      ).json();
      dispatch({ type: 'DELETED' });
      dispatch({ type: 'NO_TASK' });
      clearState();
      M.toast({ html: result.message, classes: 'green darken-1' });
    } catch (error) {
      M.toast({ html: error, classes: 'orange darken-1' });
    }
  };

  const clearState = () => {
    setGroup('');
    setTitle('');
    setDue('');
    setDescription('');
    setDone(false);
  };

  useEffect(() => {
    if (state.current) {
      setGroup(getGroupName(state.current.group));
      setTitle(state.current.title);
      setDue(state.current.due.slice(0, 10));
      setDescription(state.current.description);
      setDone(state.current.done);
    }
  }, [state]);
  return (
    <div>
      {state.task === 'editing' ? (
        <Edit />
      ) : state.task ? (
        <div style={{ paddingInline: '1em' }}>
          <div className='title5' style={{ textTransform: 'capitalize' }}>
            {title}
          </div>
          <div style={{ display: 'flex', marginBlock: '1em' }}>
            <div
              style={{
                fontWeight: 'bold',
                overflow: 'hidden',
              }}
            >
              Group：
            </div>
            {group}
          </div>
          <div style={{ display: 'flex', marginBlock: '1em' }}>
            <div
              style={{
                fontWeight: 'bold',
                overflow: 'hidden',
              }}
            >
              Due：
            </div>
            {due}
          </div>
          <div style={{ marginBlock: '1em' }}>
            <div
              style={{
                fontWeight: 'bold',
                overflow: 'hidden',
              }}
            >
              Description：
            </div>
            {description}
          </div>
          <div style={{ display: 'flex', marginBlock: '1em' }}>
            <div
              style={{
                fontWeight: 'bold',
                overflow: 'hidden',
              }}
            >
              Done：
            </div>
            {done ? 'Done' : 'Not Done'}
          </div>
          {state.current && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <a
                  onClick={(e) => {
                    dispatch({ type: 'EDITING' });
                  }}
                  className='waves-effect waves-light btn deep-purple accent-1 editButton'
                >
                  <i className='material-icons'>border_color</i>
                </a>
              </div>
              <div>
                <a
                  onClick={(e) => {
                    deleteOne(e);
                  }}
                  className='waves-effect waves-light btn deep-orange lighten-2 deleteButton'
                >
                  <i className='material-icons'>delete</i>
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Read;
