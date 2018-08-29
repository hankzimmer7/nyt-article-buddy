import React from 'react'

const Search = props => (
  <div className="container">
    <div className="jumbotron">
      <h2 className="text-center">Search</h2>
      <form>
        <div className="form-group">
          <label htmlFor="topic">Topic</label>
          <input type="text"
            name="topic"
            className="form-control"
            id="topic-input"
            placeholder="Enter topic"
            value={props.topic}
            onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="startYear">Start Year</label>
          <input type="number"
            name="startYear"
            className="form-control"
            id="startYearInput"
            placeholder="Enter Start Year"
            value={props.startYear}
            onChange={props.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="endYear">End Year</label>
          <input type="number"
            name="endYear"
            className="form-control"
            id="endYearInput"
            placeholder="Enter End Year"
            value={props.endYear}
            onChange={props.handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
      </form>
    </div>
  </div>
)

export default Search
