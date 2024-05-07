import PropTypes from 'prop-types'

const WeatherCard = ({weather}) => {
    const daystyle = {width : "18rem"}
    const night_style= {width:'18rem', backgroundColor:'#666', color:'white'}
    const style = weather.current.is_day?daystyle : night_style
    return(
        <div className="card" style={style}>
            <div className = "card-body">
            <img src={`http:${weather.current.condition.icon}`} className = "card-img-top"/>
                <h5 className="card-title">
                    {weather.location.name},
                    {weather.location.region} -  
                    {weather.location.country}
                </h5>
                <p className="card-tex">
                    {weather.current.condition.text}
                </p>
                <p className="card-tex">
                    <i className="bi bi-thermometer-half"></i>
                    <b>{weather.current.temp_c}°C</b>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-wind"></i>
                    <b>{weather.current.wind_kph}kph</b>
                    &nbsp;&nbsp;&nbsp;
                    <i className="bi bi-droplet"></i>
                    <b>{weather.current.humidity}%</b>
                </p>
            </div>
        </div>
    )
}
WeatherCard.propTypes = {
    weather: PropTypes.object.isRequired
}
export default WeatherCard