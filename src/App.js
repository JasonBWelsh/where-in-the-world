import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const URL = 'https://restcountries.eu/rest/v2/all';

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(URL);
      console.log(response.data);
      setCountries(response.data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      jshfjkhfkjhk
      <span>dgdgd</span>
    </div>
  );
}

export default App;
