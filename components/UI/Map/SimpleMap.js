import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    console.log(GoogleMapReact)
    return (
      // Important! Always set the container height explicitly
      <div className="mapcontainer"style={{height: '150px', width: '250px',borderRadius:"5px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBTWvP_1Iz0veNnu-k7iau-i1WLj8wAMS0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
