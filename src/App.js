
import './App.css';
import { useEffect, useState } from 'react';
import Display from './Display';

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  // called always (initial load + any state or props )
  useEffect(() => {
    console.log('One Updated');
  });
  useEffect(() => {
    console.log('Two Updated');
  }, []);
  useEffect(() => {
    console.log('Count Updated');
  }, [count]);
  useEffect(() => {
    console.log('Age Updated');
  }, [age]);
  useEffect(() => {
    console.log('Both Updated');
  }, [count, age]);
  useEffect(() => {
    return () => {
      console.log('Destroyed');
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <Display value={count} text={'Count'} callback={setCount} />
        <Display value={age} text={'Age'} callback={setAge} />
      </header>
    </div>
  );
}

export default App;
