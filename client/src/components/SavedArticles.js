import React, {Component} from 'react';
import axios from 'axios';

class SavedArticles extends Component {
    
    state = {
        articles: []
    };

    componentDidMount() {
        this.loadSavedArticles();
    };

    loadSavedArticles = () => {
        console.log("Loading saved articles");
        axios.get("/api/articles")
            .then(res =>
            this.setState({ articles: res.data})
        )
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="text-center">Saved Articles</h2>
                    {this.state.articles.length ? (
                        <div className="row">
                            {this.state.articles.map(article => (
                                <div className="col-12" key={article._id}>
                                    <div className="card mb-1">
                                        <div className="card-body">
                                        <h3 className="card-title"><a target="_blank" href={article.url}>{article.title}</a></h3>
                                        <p className="card-text">{article.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                    <h3>No Results to Display</h3>
                    )}                                
                </div>
            </div>
        );
    };
};

export default SavedArticles;