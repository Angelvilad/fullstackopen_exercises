import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Countries from './Countries.js';


function App() {
  const [newSearch, setNewSearch] = useState('');
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      const {data} = response;
      setCountries(data);
    })
  }, []);

  const handleChange = (event) => {
    setNewSearch(event.target.value);    
  }

  return (
    <div>
      find countries<input onChange={handleChange} />
      <div>
        {
          <Countries countries={countries} filter={newSearch} />
        }
      </div>
    </div>
  );
}

export default App;