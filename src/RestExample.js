import {useEffect, useState} from "react";
import axios from "axios";

const RestExample = () => {
  const url = 'http://localhost:3005/api/getOne/64284623b0ec2d89dc9ccdee';
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
    })
  }, [])

  return <div className="App">
    <h1>List of Countries</h1>
    <div>
      <ul>
        {countries && countries.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  </div>
};

export default RestExample;