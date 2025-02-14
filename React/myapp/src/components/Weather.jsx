

function Weather({city,temperature,humidity,condition}){
    return(
        <div className="weather-card">
            <h2 className="city-name">Weather Information:{city}</h2>
            <p className="weather-info">Temperature:{temperature}</p>
            <p className="weather-info">Humidity:{humidity}</p>
            <p className="weather-info">Weather Condition:{condition}</p>
        </div>
    )
}

export default Weather;