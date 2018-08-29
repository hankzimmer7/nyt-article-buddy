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
            this.setState({ dishes: res.data})
        )
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                <h2 className="text-center">Saved Articles</h2>
                </div>
            </div>
        );
    };
};

export default SavedArticles;