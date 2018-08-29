import React, { Component } from 'react';
import Titlebar from './components/Titlebar';
import Search from './components/Search';
import Results from './components/Results';
import SavedArticles from './components/SavedArticles';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Search />
        <Results />
        <SavedArticles />
      </div>   
    );
  }
}

export default App;
