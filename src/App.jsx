import {BrowserRouter,Route,Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState,useEffect } from "react"

function App() {

  
  
  const [searchParam, setSearchParam] = useState("");

  const [universities, setUniversities] = useState([]);

  function fetchUniversities(country) {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setUniversities(data))
      .catch((error) => console.error(error));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  
  useEffect(() => {
    fetchUniversities(searchParam);
  }, [searchParam]);
  
  return (
    <div className="search-panel">
      
      <p>Explore...</p>
      <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="countryname"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
      />
      <input type='submit' className='button'/><br />
      </form>
      
      <hr />
      <p>{universities.length} universities</p>
      <div className="container">
        {universities.map((university) => (
          <li key={university.name}>
            <a href={university.web_pages} target="_blank" rel="noreferrer"></a>
            {university.name}<br></br>
            {university.web_pages}<br/>
            {university.country}
              
            
          </li>
          
           
         
          
        ))}
       </div>
      

    </div>
  );
}


export default App