import React, {Component} from 'react';
import {connect} from 'react-redux'

import {getIncidents} from '../actions'
import Table from './table/Table'
import {headers} from "../utils/tableHeaders";

class IncidentsList extends Component{

    isIncidents(incidents){
        return incidents !== undefined;
    }

    render(){
        const {incidents, selectedIncidents} = this.props;
        return (
            <div className="table">
                {this.isIncidents(incidents) === true? (<Table headers={headers} incidents={incidents} selectedIncidents={selectedIncidents}/>): (console.log("SPINNER")) }
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        incidents: state.incidentsReducer.allIncidents,
        selectedIncidents: state.incidentsReducer.selectedIncidents,
    }
};

const mapDispatchToProps = dispatch => ({
    getIncidents: dispatch(getIncidents),
});
export default connect(mapStateToProps, mapDispatchToProps)(IncidentsList);