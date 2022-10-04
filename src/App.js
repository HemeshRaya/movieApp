import React from 'react';
import Movies from './Movies/movies.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Movies />
    </div>
  );
  }
}

export default App;
