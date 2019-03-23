import {
  GET_INCIDENTS,
  REMOVE_INCIDENT_FROM_SELECTED,
  ADD_INCIDENT_TO_SELECTED,
  GET_VIEW_PORT,
  CHANGE_VIEW_PORT,
} from './actionTypes';
import { incidents } from '../utils/incidents';
import { viewPort } from '../utils/viewPort';

export const getIncidents = {
  type: GET_INCIDENTS,
  incidents,
};

export function selectIncident(incidentID) {
  return {
    type: ADD_INCIDENT_TO_SELECTED,
    incidentID,
  };
}

export function unSelectIncident(incidentID) {
  return {
    type: REMOVE_INCIDENT_FROM_SELECTED,
    incidentID,
  };
}

export const getViewports = {
  type: GET_VIEW_PORT,
  viewPort,
};

export function changeViewPort(viewport) {
  return {
    type: CHANGE_VIEW_PORT,
    viewPort: viewport,
  };
}
