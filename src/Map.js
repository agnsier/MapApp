import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {ACCESS_TOKEN} from './api_key'
class Map extends Component {
//TODO
    state = {
        viewport: {
            latitude: 52.388527,
            longitude: 13.072789,
            width: '100vw',
            height: '70vh',
            zoom: 8
        }
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={ACCESS_TOKEN}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}
export default Map;