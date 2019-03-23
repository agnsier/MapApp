import React from 'react';
import { MdDoNotDisturbOn } from 'react-icons/md';
import { MdBuild } from 'react-icons/md';
import { MdWbCloudy } from 'react-icons/md';
import { Marker } from 'react-map-gl';
import { connect } from 'react-redux';

import { TRAFFIC, ROAD_WORKS, DANGEROUS_CONDITIONS } from '../utils/incidents';
import { selectIncident } from '../actions';

const getIconByType = (data, selectIncident) => {
  const ICON_SIZE = 30;
  switch (data.type) {
    case TRAFFIC:
      return <MdDoNotDisturbOn onClick={() => selectIncident(data.id)} size={ICON_SIZE} />;
    case DANGEROUS_CONDITIONS:
      return <MdWbCloudy onClick={() => selectIncident(data.id)} size={ICON_SIZE} />;
    case ROAD_WORKS:
      return <MdBuild onClick={() => selectIncident(data.id)} size={ICON_SIZE} />;
    default:
      return;
  }
};
const CustomMarker = ({ data, selectIncident }) => (
  <Marker latitude={data.point.y} longitude={data.point.x} offsetLeft={-20} offsetTop={-10}>
    {getIconByType(data, selectIncident)}
  </Marker>
);

const mapDispatchToProps = dispatch => ({
  selectIncident: incident => dispatch(selectIncident(incident)),
});

export default connect(
  null,
  mapDispatchToProps
)(CustomMarker);
