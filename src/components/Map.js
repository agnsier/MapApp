import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {ACCESS_TOKEN} from '../api_key'
import {getIncidents} from "../actions";
import {connect} from 'react-redux'
import {CustomMarker} from "./Marker";


class Map extends Component {
    state = {
        viewport: {
            latitude: 52.388527,
            longitude: 13.072789,
            width: '100%',
            height: '70vh',
            zoom: 8
        }
    };
    render() {
        const {incidents} = this.props;
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={ACCESS_TOKEN}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                onViewportChange={(viewport) => this.setState({viewport})}
            >
                {incidents.map(incident => <CustomMarker data={incident}/>)}
            </ReactMapGL>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        incidents: state.incidentsReducer.allIncidents,
    }
};

const mapDispatchToProps = dispatch => ({
    getIncidents: dispatch(getIncidents),
});
export default connect(mapStateToProps, mapDispatchToProps)(Map);