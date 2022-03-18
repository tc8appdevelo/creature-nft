import React from "react";
import { createRef } from "react";

const google = window.google;
const mapOptions = {
  center: {
    lat: 40.712776,
    lng: -74.005974
  },
  zoom: 10,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{visibility: "off"}],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{visibility: "off"}],
    },
  ],
};

class GameMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const map = this.mapRef.current;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return (
      <div className="map-wrap">
        <div className="map" ref={this.mapRef}></div>
      </div>
    )
  }
}

export default GameMap;