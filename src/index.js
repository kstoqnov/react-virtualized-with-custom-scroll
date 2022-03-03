import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import data from './data';
import ScrollList from './List';

function App() {
  return (
    <div className="App">
      <ScrollList countries={data} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
