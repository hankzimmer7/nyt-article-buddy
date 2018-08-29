import React from 'react';

const Search = () => (
    <div className="container">
        <div className="jumbotron">
        <h2 className="text-center">Search</h2>
        <form>
        <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input type="text" className="form-control" id="topic-input" placeholder="Enter topic"/>
        </div>
        <div className="form-group">
            <label htmlFor="startYear">Start Year</label>
            <input type="number" className="form-control" id="startYearInput" placeholder="Enter Start Year"/>
        </div>
        <div className="form-group">
            <label htmlFor="endYear">End Year</label>
            <input type="number" className="form-control" id="endYearInput" placeholder="Enter End Year"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
)

export default Search;