import React, { useEffect, useState} from "react";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";
import video from "../../public/video/videos.json"

const CardWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState();
  const [temperture, setTemperture] = useState();
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [weatherCondicion, setweatherCondicion] = useState("default");
  const [icono, setIcono] = useState(`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`);
  useEffect(() => {
    if (lat) {
      const APIKey = "d7ad0ef9500759b6d3bbc51a5d6a6f5a";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          const temp = {
            celsius: `${Math.round(res.data.main.temp - 273.15)} °C`,
            farenheit: `${(Math.round(res.data.main.temp - 273.15) * 9) / 5 + 32} °F`,
          };
          setTemperture(temp);
          setIsLoading(false);
          // setweatherCondicion("clear sky")
          setweatherCondicion(res.data.weather[0].main)
        })
        .catch((err) => console.log(err));
    }
  }, [lat, lon]);

  const handleClick = () => setIsCelsius(!isCelsius);
  
  const moreTemps = {
     /* i'm adding temperture for human feel like */
    celsiusFeelsLike: `${Math.round(weather?.main.feels_like - 273.15)} °C`,
    farenheitFeelsLike: `${(Math.round(weather?.main.feels_like - 273.15) * 9) / 5 + 32} °F`,
    celsiusMinTemp: `${Math.round(weather?.main.temp_min - 273.15)} °C`,
    celsiusMaxTemp: `${Math.round(weather?.main.temp_max - 273.15)} °C`,
    farenheitMinTemp: `${(Math.round(weather?.main.temp_min - 273.15) * 9) / 5 + 32} °F`,
    farenheitMaxTemp: `${(Math.round(weather?.main.temp_max - 273.15) * 9) / 5 + 32} °F`,

  }
  if (isLoading) {
    return <LoadingScreen />;
  } else {
    const objStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.7)"
    };
    
    let VideoURL;
    let imgAlt;
    for(let i = 0; i<video.length; i++){

      if(video[i].name==weatherCondicion){
      VideoURL = video[i].URL
      imgAlt = video[i].imgAlt
      break
    }else{
      VideoURL ="video[0].URL"
    }
    }


    // data:weather?.weather[0].main
    return (
      
      <div className="container">
       
        <div className="Maincontainer">
        
  <video src={VideoURL} autoPlay={true} muted={true} loop={true} poster={imgAlt}></video>

        <article className="Card__APP" style={objStyle}>
          <h1 className="App__Title">Lufe's Weather App</h1>
          <h2>{`${weather?.name}, ${weather?.sys.country}`}
          <span className="hour"></span></h2>
          <div>
            <div className="APP__Img__Container">
              <div className="minMax" onClick={handleClick}>
                <p>
                Min
                <span>
              {isCelsius ? moreTemps?.celsiusMinTemp : moreTemps?.farenheitMinTemp}
              </span>
              </p>
              </div>
              <img
                className="App__img"
                src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
                }
              ></img>

              <div className="minMax" onClick={handleClick}>
                <p>
                Max
                <span>
                {isCelsius ? moreTemps?.celsiusMaxTemp : moreTemps?.farenheitMaxTemp}
              </span>
              </p>
              </div>
            </div>
            <h3 className="App__Description">
              {weather?.weather[0].description}
            </h3>
            
            <h2 className="App__Degrees" onClick={handleClick}>
              {isCelsius ? temperture?.celsius : temperture?.farenheit}
            </h2>

            <ul className="App__details">
              <li>
                <span className="App__Details_Item">
                    <i className="fa-solid fa-wind"></i>
                    Wind Speed
                </span>
                <i className="fa-solid fa-wind"></i>
                {weather?.wind.speed} m/s
              </li>
              <li>
                <span className="App__Details_Item">
                  <i className="fa-solid fa-cloud"></i>
                  Clouding
                </span>
                <i className="fa-solid fa-cloud"></i>
                {weather?.clouds.all} %
              </li>
              <li>
                <span className="App__Details_Item">
                <i className="fa-solid fa-gauge"></i>
                    Pressure</span>
                <i className="fa-solid fa-gauge"></i>
                {weather?.main.pressure} hPa
              </li>
              <li>
                <span className="App__Details_Item">
                <i className="fa-solid fa-droplet"></i>
                    Humidity
                    </span>
                <i className="fa-solid fa-droplet"></i>
                {weather?.main.humidity}%
              </li>
            </ul>
          </div>
          <div className="App__container">
            <button className="App__button" onClick={handleClick}>
              Show on {isCelsius ? "Farenheit" : "Celsius"}
            </button>
          </div>
        </article>
      
        </div>
        <section className="moredata">
          
          <article className="Card__APP">
          <h1>Extra Data</h1>
          <p>
            <li>
          {/* This temperature parameter accounts for the human perception of weather */}
          Thermal sensation: {isCelsius ? moreTemps?.celsiusFeelsLike : moreTemps?.farenheitFeelsLike}</li>
          <li>Visibility {weather?.visibility/1000}km</li>
          
          </p>
          
          
          </article>
          
        </section>
        
        </div>
    );
  }
};

export default CardWeather
