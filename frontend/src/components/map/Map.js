import React from 'react'
import MapGl, { Marker } from 'react-map-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Link } from 'react-router-dom'

class Map extends React.Component {
  state = {
    lat: null,
    lon: null
  }

  async handleModal(id) { 
    try {
      const response = await axios.post(`/api/locations/${id}`) 
      this.setState({ lat: response.data.lat, lon: response.data.lon })
    } catch (err) {
      console.log(err)
    }
  }



  render() {
    return (
      <>
        <MapGl
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle='mapbox://styles/mapbox/light-v10'
          {...this.props.viewport}
          onViewportChange={this.props.moveMap}
        >
         
         <Marker
              latitude={this.state.lat}
              longitude={this.state.lon}>
              <span role="img"
                aria-label="marker"
              >X</span>
        </Marker>
         
        </MapGl>
       
      </>
    )
  }
}

export default Map