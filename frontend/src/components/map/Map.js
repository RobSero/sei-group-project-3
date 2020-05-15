import React from 'react'
import MapGl, { Marker } from 'react-map-gl'
// import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 51.515,
    longitude: -0.078,
    width: '80vw',
    height: '80vh',
    zoom: 13
    }
  }

  render() {
    const { viewport } = this.state

    return (
      <MapGl
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/mapbox/light-v10'
        { ...viewport }
        onViewportChange= {viewport => {
          this.setState({ viewport })
        }}
      >
        <Marker
          latitude={51.515}
          longitude={-0.078}
        >
          <span role="img" aria-label="marker">🐳</span>
        </Marker>
        
      </MapGl>
    )
  }
}

export default Map
