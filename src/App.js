import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { decreament, increament } from './Redux/Actions/actions';

function App() {
  const dispatch = useDispatch();

  let counter = useSelector(state => state.value);

  return (
    <div className="App">
      <h1>Learn Redux</h1>
      <h3>counter: {counter}</h3>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
}

export default App;
