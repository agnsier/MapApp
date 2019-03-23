import { FlyToInterpolator } from 'react-map-gl';

export const viewPort = {
  latitude: 52.388527,
  longitude: 13.072789,
  width: '100%',
  height: '70vh',
  zoom: 9,
};

export const berlinViewPort = {
  longitude: 13.405,
  latitude: 52.52,
  zoom: 9,
  width: '100vw',
  transitionDuration: 5000,
  transitionInterpolator: new FlyToInterpolator(),
};
