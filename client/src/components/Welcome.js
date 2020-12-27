import React from 'react';

const Welcome = () => {
  return (
    <div style={{ height: '40em', overflow: 'auto' }}>
      <div className='title5'>Welcome</div>
      <p>
        This is essentially a todo list app and I prefer to it "Tomato". You can
        add, view, edit and delete your task items.
      </p>
      <p>
        The app is inspired by Alex Czarto's theory,
        <a
          href='https://czarto.com/2012/04/24/four-quadrants-of-time/'
          target='_blank'
        >
          The Four Quadrants of Time Management,
        </a>
        which I learned from the Research Methods class taught by Professor
        Penelope Sanderson of UQ.
      </p>
      <p>
        The theory categorize one's future tasks into quadrants in order to have
        better time management. Namely:
      </p>
      <ul>
        <li>- Important and urgent</li>
        <li>- Important but not urgent</li>
        <li>- Not important but urgent</li>
        <li>- Not important and not urgent</li>
      </ul>
      <p>
        I use the MERN stack [MongoDB, Express, React and Nodejs] to build this
        app. Materializecss is used for the User Interface part.
      </p>
      <p>
        As you may have noticed, this app still has some bugs. I hope to improve
        this app by adding the following features in the future:
      </p>
      <ul>
        <li>- Fully responsive and mobile-friendly</li>
        <li>- Drag and drop items</li>
        <li>- Create new card/groups</li>
        <li>- Signup/login</li>
        <li>- Reminder of near-due/over-due items</li>
      </ul>
      <p>Cheers!</p>
    </div>
  );
};

export default Welcome;
