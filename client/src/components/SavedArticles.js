import React from 'react'

const SavedArticles = props => (

  <div className="container">
    <div className="jumbotron">
      <h2 className="text-center">Saved Articles</h2>
      {props.savedArticles.length ? (
        <div className="row">
          {props.savedArticles.map(article => (
            <div className="col-12" key={article._id}>
              <div className="card mb-1">
                <div className="card-body">
                  <h3 className="card-title">
                  <a 
                    target="_blank" 
                    href={article.url}>
                    {article.title}
                    </a>
                  </h3>
                  <p className="card-text">{article.date && article.date.slice(0,4)}</p>
                  <button className="btn btn-primary" onClick={() => { props.unsaveArticle(article._id) }}>
                  UnSave
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
)

export default SavedArticles
