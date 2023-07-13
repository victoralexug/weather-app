
export default function Bottom(props) {
    return(
      <div>
        {props.data.main !== undefined &&
        <div className="bottom">
          <div className="feels">
            {props.data.main ? <p className="bold">{props.data.main.feels_like.toFixed()}°F</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {props.data.main ? <p className="bold">{props.data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {props.data.wind ? <p className="bold">{props.data.wind.speed.toFixed()}MPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      }
      </div>
    )
}