import './App.css';
import { useState, useEffect, createContext, useReducer } from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import { reducer, initialState } from './reducers/reducerFn';
import { colors } from './utils/utils';
import Read from './components/Read';
import Add from './components/Add';
export const GeneralContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [tomatoes, setTomatoes] = useState([]);

  const [one, setOne] = useState([]);
  const [two, setTwo] = useState([]);
  const [three, setThree] = useState([]);
  const [four, setFour] = useState([]);

  const getAll = async () => {
    try {
      const result = await (
        await fetch('http://localhost:5000/all', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ).json();
      setTomatoes(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAll();
  }, [state]);

  useEffect(() => {
    setOne(tomatoes.filter((i) => i.group === 'One'));
    setTwo(tomatoes.filter((i) => i.group === 'Two'));
    setThree(tomatoes.filter((i) => i.group === 'Three'));
    setFour(tomatoes.filter((i) => i.group === 'Four'));
  }, [tomatoes]);
  console.log(state.task);
  return (
    <GeneralContext.Provider value={{ state, dispatch }}>
      <div className='App grey lighten-5'>
        <Nav />
        <div
          className='container'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '2em',
            minHeight: '100vh',
          }}
        >
          <div className='row'>
            <div className='col l12 xl6'>
              <Card
                props={{
                  group: 'One',
                  content: one,
                  bgc: colors[0],
                }}
              />
            </div>
            <div className='col l12 xl6'>
              <Card
                props={{
                  group: 'Two',
                  content: two,
                  bgc: colors[1],
                }}
              />
            </div>
            <div className='col l12 xl6'>
              <Card
                props={{
                  group: 'Three',
                  content: three,
                  bgc: colors[2],
                }}
              />
            </div>
            <div className='col l12 xl6'>
              <Card
                props={{
                  group: 'Four',
                  content: four,
                  bgc: colors[3],
                }}
              />
            </div>
          </div>
          <div className='left-box container' style={{ marginLeft: '2em' }}>
            <div
              className='card-panel deep-purple lighten-5'
              style={{ height: '45em', width: '17em' }}
            >
              {state.task === 'adding' ? <Add /> : <Read />}
            </div>
          </div>
        </div>
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
