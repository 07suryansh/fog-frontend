import './map.css'

export default function Map(props) {
  return (
    <div className="map-info">
        <div className="map-iamge">
            <div className="img-overlay"></div>
            <img src={props.img_url} alt="map image" className='img-pic'/>
        </div>
        <div className="location-name-one">{props.h_one}</div>
        <div className="location-name-two">{props.h_two}</div>
    </div>
  )
}
