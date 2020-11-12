import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  //State Assign
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);


  //Watch Changes on Term
  useEffect(() => {
    const search = async () => {
      const res = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(res.data.query.search);
    }

    if(term) search();
  },[term]);


  //Render out the results
  const renderedResults = results.map(result => {
    return(
      <div key={result.pageid} className="item" >
        <div className="content" >
          <div className="right floated content">
            <a 
              className="ui button" 
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              target="_blank"
            > Go</a>
          </div>
          <div className="header" > { result.title } </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  });


  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        { renderedResults }
      </div>
    </div>
  )
}

export default Search;