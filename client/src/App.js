import React, { Component } from 'react';
import Titlebar from './components/Titlebar';
import Search from './components/Search';
import Results from './components/Results';
import SavedArticles from './components/SavedArticles';
import './App.css';

class App extends Component {

  state = {
    articleResults: [],
    topic: "",
    startYear: "",
    endYear: "",
    isLoaded: false
};

//Update the search parameters as the user types
handleChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

//When the user clicks the "Search" button
handleSubmit = event => {
  event.preventDefault();
  console.log("Searching for: ")
  console.log(`title: ${this.state.topic} start year: ${this.state.startYear} end year: ${this.state.endYear}`)
  this.searchArticles();
};

//Searching the new york times api for the search parameters and updates the state
searchArticles = () => {
  const queryURL = this.buildQueryURL()
  console.log(`Searching articles. Query url: ${queryURL}`);
  fetch(queryURL)
    .then(res => res.json())
    .then(
      (result) => {
        console.log("result:");
        console.log(result);
        this.setState({
          isLoaded: true,
          articleResults: result.response.docs
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

saveArticle = articleId => {
  console.log("Saving article " + articleId);
}

updatePage = () => {
  console.log("update the page");
}

componentDidMount() {

}


buildQueryURL = () => {

  const {topic, startYear, endYear} = this.state;
    // queryURL is the url we'll use to query the API
    let queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    
    const apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';


    queryURL += "&api-key=" + apiKey;

    queryURL += "&q=" + topic;
  
  
    // Grab text the user typed into the search input, add to the queryParams object
    // queryParams.q = topic
    //   .trim();
  
    // If the user provides a startYear, include it in the queryParams object
    // var startYear = this.state.startYear
    //   .val()
    //   .trim();
  
    // if (parseInt(startYear)) {
    //   queryParams.begin_date = startYear + "0101";
    // }
  
    // // If the user provides an endYear, include it in the queryParams object
    // var endYear = this.state.endYear
    //   .val()
    //   .trim();
  
    // if (parseInt(endYear)) {
    //   queryParams.end_date = endYear + "0101";
    // }
  
    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");
    // console.log(queryURL + (queryParams));
    return queryURL;
    // return queryURL + (queryParams);
  }

  render() {

    console.log("App this.state.articleResults");
    console.log(this.state.articleResults);

    return (
      <div>
        <Titlebar />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} topic={this.state.topic} startYear={this.state.startYear} endYear={this.state.endYear}/>
        <Results articleResults={this.state.articleResults} saveArticle={this.saveArticle}/>
        <SavedArticles />
      </div>   
    );
  }
}

export default App;
