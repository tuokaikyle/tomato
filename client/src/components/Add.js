import React, { useContext, useState, useRef } from 'react';
import { GeneralContext } from '../App';
import { getGroupName } from '../utils/utils';
import M from 'materialize-css';

const Add = () => {
  const { state, dispatch } = useContext(GeneralContext);

  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [description, setDescription] = useState('');
  const group = state.add_to;

  const submitHandler = async (e) => {
    e.preventDefault();

    const send = {
      group,
      title,
      description,
      due,
    };
    try {
      const result = await (
        await fetch('/addtomato', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ send }),
        })
      ).json();
      dispatch({ type: 'ADDED' });
      dispatch({ type: 'NO_TASK' });
      M.toast({ html: result.message, classes: 'green darken-1' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {state ? (
        <div className='row'>
          <form className='col s12' onSubmit={submitHandler}>
            <h5>{getGroupName(state.add_to)}</h5>

            <div className='input-field'>
              <label htmlFor=''>Title</label>
              <input
                id='title'
                type='text'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className='input-field'>
              <input
                type='date'
                value={due}
                onChange={(e) => {
                  setDue(e.target.value);
                }}
              />
            </div>
            <div className='input-field'>
              <label htmlFor=''>Description</label>
              <textarea
                id='textarea1'
                className='materialize-textarea'
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <input className='btn' type='submit' name='Submit' />
          </form>
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
};

export default Add;
