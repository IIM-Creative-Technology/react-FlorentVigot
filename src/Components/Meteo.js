import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Sass/components/_meteo.scss';

function Axios() {

  const [meteo, setUsers] = useState([]);
  
   
  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=Brest&lang=fr&appid=371d4d60a167ee04ff060bb18edb0e45")
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div className="meteo">
      {meteo.cod === 200 ?
        <div className="meteo__wrapper">
          <h2>Voici la méto en temps réel <strong>{meteo.name}</strong> :</h2>
          <p>{meteo.weather[0].description}</p>
        </div>
      : null}
    </div>
  );
}



export default Axios;