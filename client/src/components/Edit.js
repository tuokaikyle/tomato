import React, { useContext, useState, useEffect } from 'react';
import { GeneralContext } from '../App';
import { groupNames, getGroupName } from '../utils/utils';
import M from 'materialize-css';

const Edit = () => {
  const { state, dispatch } = useContext(GeneralContext);

  const [group, setGroup] = useState('');
  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (state) {
      setGroup(state.current.group);
      setTitle(state.current.title);
      setDue(state.current.due.slice(0, 10));
      setDescription(state.current.description);
      setDone(state.current.done);
    } else {
      // clearState();
    }
  }, [state]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const send = {
      group,
      title,
      description,
      due,
      done,
    };
    try {
      const result = await (
        await fetch('/edittomato', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ send, id: state.current._id }),
        })
      ).json();
      dispatch({ type: 'UPDATED' });
      dispatch({ type: 'NO_TASK' });
      M.toast({ html: result.message, classes: 'green darken-1' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='row' style={{}}>
        <form className='col s12' onSubmit={submitHandler}>
          <div className='input-field col s12'>
            <select
              className='browser-default'
              onChange={(e) => {
                setGroup(e.target.value);
              }}
            >
              <option value={group} disabled selected>
                {getGroupName(state.current.group)}
              </option>
              {[0, 1, 2, 3].map((i) => (
                <option value={groupNames[i].shortName}>
                  {groupNames[i].fullName}
                </option>
              ))}
            </select>
          </div>

          <div className='input-field col s12'>
            <input
              id='title'
              type='text'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='date'
              value={due}
              onChange={(e) => {
                setDue(e.target.value);
              }}
            />
          </div>
          <div className='input-field col s12'>
            <textarea
              id='textarea1'
              className='materialize-textarea'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div
            onChange={(e) => {
              setDone(e.target.value);
            }}
          >
            <p>
              <label>
                <input
                  className='with-gap'
                  name='group3'
                  type='radio'
                  value={true}
                />
                <span>Done</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  className='with-gap'
                  name='group3'
                  type='radio'
                  value={false}
                />
                <span>Not Done</span>
              </label>
            </p>
          </div>
          <input className='btn' type='submit' name='Submit' />
        </form>
      </div>
    </div>
  );
};

export default Edit;
