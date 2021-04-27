import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '250px',
  height: '150px',
  borderRadius:'5px'
};
const center = {
  lat: -3.745,
  lng: -38.523
};
const SimpleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBTWvP_1Iz0veNnu-k7iau-i1WLj8wAMS0"
  })
  const [map, setMap] = useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ?(
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ):<></>
}

export default SimpleMap

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     console.log(GoogleMapReact)
//     return (
//       // Important! Always set the container height explicitly
//       <div className="mapcontainer"style={{height: '150px', width: '250px',borderRadius:"5px" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBTWvP_1Iz0veNnu-k7iau-i1WLj8wAMS0' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
