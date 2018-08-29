import React, {Component} from 'react';

class Results extends Component {

    
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="text-center">Results</h2>
                    {this.props.articleResults.length ? (
                        <div className="row">
                            {this.props.articleResults.map(article => (
                                <div className="col-12" key={article._id}>
                                    <div className="card mb-1">
                                        <div className="card-body">
                                            <h3 className="card-title">
                                                <a target="_blank" href={article.web_url}>
                                                {article.headline.main}
                                                </a>
                                            </h3>
                                            <p className="card-text">{article.pub_date}</p>
                                            <button className="btn btn-primary" onClick={() => {this.props.saveArticle(article._id)}}>
                                            Save
                                            </button>
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

export default Results;