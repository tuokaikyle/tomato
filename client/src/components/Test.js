import React from 'react';

const Test = () => {
  return (
    <div>
      {[0, 1, 2].map((i, key) => (
        <div key={key}>
          {[0, 1, 2].map((j, k) => (
            <div key={kk}>{j}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Test[(0, 1, 2)].map((i, key) => <div key={key}>{i}</div>);
