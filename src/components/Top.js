
export default function Top(props) {
  let src = ""
  if(props.data.weather){
    
      if(props.data.weather[0].main === "Clear"){
        src = "sun.png"
      }else if(props.data.weather[0].main === "Clouds"){
        src = "sun-clouds.png"
      }else if(props.data.weather[0].main === "Rain"){
        src = "sun-clouds-rain.png"
    }else if(props.data.weather[0].main === "Snow"){
      src = "clouds-snow.png"
    }else{
      src="clouds.png"
    }
  }
  
    return(
        <div className="top">
          <div className="location">
            <p>{props.data.name}</p>
          </div>
          <div className="temp">
            {props.data.main ? <h1>{props.data.main.temp.toFixed()}°F</h1> : null}
          </div>
          {props.data.weather ? 
          <div className="description">
            <img src={`https://raw.githubusercontent.com/victoralexug/weather-icons/main/images/${src}`} alt="weather" />
            <p>{props.data.weather[0].main}</p> 
          </div> : null}
        </div>
    )
}