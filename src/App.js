import { useReducer } from 'react';
import './App.css';
import ColorsDisplay from './components/ColorsGenerator/ColorsDisplay/ColorsDisplay';
import ColorsForm from './components/ColorsGenerator/ColorsForm/ColorsForm';

const reducer = (state, action) => {
  console.log({ ...state, [action.type]: action.payload});

  if (action.type === 'reset') {
    return initialState;
  }

  if (action.type === 'overwrite') {
    return [
      ...action.payload
    ]
  }

  // * Set the previous state and overwrite [action.type] (type could be 'name' or 'email')
  // * with action.payload (payload is the new input value) 

  return [
    action.payload,
    ...state
  ];
}

const initialState = []

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBoxCreation = ({color, size}) => {

    if (color.trim().length === 0) {
      color = 'rebeccapurple';
    }

    if (size.trim().length === 0) {
      size = 40;
    }

    // * Dispatch pass the new data to the Reducer hook
    dispatch({
      type: 'box',
      payload: {
        color: color,
        size: size
      }
    });
  }

  const newBoxCreated = ( newBox ) => {
    handleBoxCreation(newBox);
  }

  const removeBox = ( index ) => {
    const newBoxList = state;
    newBoxList.splice(index, 1);

    dispatch({
      type: 'overwrite',
      payload: newBoxList
    })
  }

  return (
    <div className="container p-3">
      <ColorsForm onNewBox={ newBoxCreated } />
      {
        state.length === 0 ? <p className="text-center pt-5">There's no boxes yet</p> : <ColorsDisplay removeBox={removeBox} boxList={ state } />
      }
      <div className="pt-5">
      {JSON.stringify(state)}
      </div>
    </div>
  );
}

export default App;
