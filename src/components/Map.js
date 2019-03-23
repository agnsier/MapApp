import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { ACCESS_TOKEN } from '../api_key';
import { getIncidents, getViewports, changeViewPort } from '../actions';
import { connect } from 'react-redux';
import CustomMarker from './Marker';
import { berlinViewPort } from '../utils/viewPort';

class Map extends Component {
  goToBerlin = () => {
    this.props.changeViewPort(berlinViewPort);
  };

  render() {
    const { incidents } = this.props;
    return (
      <ReactMapGL
        {...this.props.viewport}
        mapboxApiAccessToken={ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => this.props.changeViewPort(viewport)}
      >
        <button onClick={this.goToBerlin}>Back to Berlin</button>
        {incidents.map((incident, key) => (
          <CustomMarker data={incident} key={key} />
        ))}
      </ReactMapGL>
    );
  }
}
const mapStateToProps = state => {
  return {
    incidents: state.incidentsReducer.allIncidents,
    viewport: state.mapReducer.viewPort,
  };
};

const mapDispatchToProps = dispatch => ({
  getIncidents: dispatch(getIncidents),
  getViewports: dispatch(getViewports),
  changeViewPort: viewPort => dispatch(changeViewPort(viewPort)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
