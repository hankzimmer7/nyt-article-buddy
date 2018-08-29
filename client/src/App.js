import React, { Component } from 'react';
import axios from 'axios';
import Titlebar from './components/Titlebar';
import Search from './components/Search';
import Results from './components/Results';
import SavedArticles from './components/SavedArticles';
import './App.css';

class App extends Component {

  state = {
    articleResults: [],
    savedArticles: [],
    topic: "",
    startYear: "",
    endYear: "",
    isLoaded: false
  };

  componentDidMount() {
    this.loadSavedArticles();
  };

  //Query the mongoDB for the saved articles
  loadSavedArticles = () => {
    console.log("loading saved articles");
    axios.get("/api/articles")
        .then(res =>
        this.setState({ savedArticles: res.data})
    )
    .catch(err => console.log(err));
  }

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
    this.searchArticles();
    this.setState({
      topic: '',
      startYear: '',
      endYear: ''
    })
  };

  //Search the new york times api for the search parameters
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
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  buildQueryURL = () => {

    const {topic, startYear, endYear} = this.state;
      // queryURL is the url we'll use to query the API
      let queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
      
      const apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

      queryURL += "&api-key=" + apiKey;
      queryURL += "&q=" + topic;
    
      // If the user provides a startYear, include it in the query  
      if (startYear) {
        queryURL += "&begin_date=" + startYear + "0101";
      }
    
      // If the user provides an endYear, include it in the query
      if (endYear) {
        queryURL += "&end_date" + endYear + "1230";
      }
    
      // Logging the URL so we have access to it for troubleshooting
      console.log("---------------\nURL: " + queryURL + "\n---------------");
      // console.log(queryURL + (queryParams));
      return queryURL;
  }

  saveArticle = articleId => {

    //Find the desired article within the article results array based on its id
    const article = this.state.articleResults.filter(article => article._id === articleId)

    //Add the article data to the mongoDB
    axios.post("/api/articles", {
      title: article[0].headline.main,
      date: article[0].pub_date,
      url: article[0].web_url
    })
      .then(res => {
        this.loadSavedArticles();
      }
    )
    .catch(err => console.log(err));
  }

  //Delete an article from the mongoDB when the user clicks the unsave button
  unsaveArticle = articleId => {

    console.log("Removing article " + articleId);


    axios.delete("/api/articles/" + articleId)
      .then(res => {
        this.loadSavedArticles();
      }
    )
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="wrapper">
        <Titlebar />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} topic={this.state.topic} startYear={this.state.startYear} endYear={this.state.endYear}/>
        <Results articleResults={this.state.articleResults} saveArticle={this.saveArticle}/>
        <SavedArticles savedArticles={this.state.savedArticles} unsaveArticle={this.unsaveArticle}/>
      </div>   
    );
  }
}

export default App;
