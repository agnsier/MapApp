import React, {Component} from 'react';

import {incidentsMap} from '../../utils/incidentsMap'

// const row = (x, i, headers, onClick) =>
//     <tr key={`TableRow-${i}`} onClick={onClick}>
//         {headers.map((header, k) =>
//             <td key={`TableRowData-${k}`}>
//                 {x[header]}
//             </td>
//         )}
//     </tr>;

class TableRow extends Component {

    isExpanded = (incident) => {
        return this.props.selectedIncidents.includes(incident.id)
    };

    getMinFromSec = (seconds) => {
        return parseInt(seconds/60)
    };

    render() {
        const incident = this.props.data;
        // TODO zmień te h4
        return (
            <React.Fragment>

                <tr onClick={() => this.props.onClick(incident)}>
                    <td data-label="Accident Type">{incidentsMap[incident.type]}</td>
                    <td data-label="From">{incident.from}</td>
                    <td data-label="To">{incident.to}</td>
                    <td data-label="Delay">{`${this.getMinFromSec(incident.delay)} min`}</td>
                </tr>
                {this.isExpanded(incident) === true ? (
                    <td colSpan="4">
                    <h4>Accident details: {incident.details}</h4>
                    <h4>Accident magnitude: {incident.magnitude}</h4>
                    </td>
                    ) : null}
            </React.Fragment>
        )
    }
}
export default TableRow;