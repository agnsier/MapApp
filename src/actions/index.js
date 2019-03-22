import {GET_INCIDENTS, REMOVE_INCIDENT_FROM_SELECTED, ADD_INCIDENT_TO_SELECTED} from './actionTypes'
import {incidents} from "../incidents";

export const getIncidents = {
        type: GET_INCIDENTS,
        incidents
};

//TODO zmienić na expanded

export function selectIncident(incidentID) {
    return {
        type: ADD_INCIDENT_TO_SELECTED,
        incidentID
    }
}

export function unSelectIncident(incidentID) {
    return {
        type: REMOVE_INCIDENT_FROM_SELECTED,
        incidentID
    }
}