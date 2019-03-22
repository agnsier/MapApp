import {GET_INCIDENTS, REMOVE_INCIDENT_FROM_SELECTED, ADD_INCIDENT_TO_SELECTED} from '../actions/actionTypes'
import {incidents} from "../incidents";

const initialState = {
    allIncidents: [],
    selectedIncidents: []
};

function incidentsReducer(state = initialState, action){
    switch (action.type) {
        case GET_INCIDENTS:
            return {...state, allIncidents: incidents.sort((a, b) => b.delay - a.delay)};
        case ADD_INCIDENT_TO_SELECTED:
            return {...state, selectedIncidents: [...state.selectedIncidents, action.incidentID]};
        case REMOVE_INCIDENT_FROM_SELECTED:
            return {...state, selectedIncidents: state.selectedIncidents.filter(incidentID => incidentID !== action.incidentID)};
        default:
            return state
    }
}

export default incidentsReducer;

