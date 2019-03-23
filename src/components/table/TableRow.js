import React, { Component } from 'react';

import { INCIDENTS } from '../../utils/incidents';
import { MAGNITUDES } from '../../utils/magnitude';
import { FaAngleDown } from 'react-icons/fa';

class TableRow extends Component {
  isExpanded = incident => {
    return this.props.selectedIncidents.includes(incident.id);
  };

  getMinFromSec = seconds => {
    return parseInt(seconds / 60);
  };

  render() {
    const incident = this.props.data;
    const expanded = this.isExpanded(incident);
    return (
      <React.Fragment>
        <tr
          onClick={() => this.props.onClick(incident)}
          style={{ backgroundColor: expanded ? '#e7e7e7' : '#fafff8' }}
        >
          <td>
            <FaAngleDown size={30} />
          </td>
          <td data-label="Accident Type">{INCIDENTS[incident.type]}</td>
          <td data-label="From">{incident.from}</td>
          <td data-label="To">{incident.to}</td>
          <td data-label="Delay">{`${this.getMinFromSec(incident.delay)} min`}</td>
        </tr>
        {expanded ? (
          <td colSpan="5">
            <span style={{ display: 'block' }}>
              <span style={{ fontWeight: 'bold' }}>Accident details:</span>
              {incident.details}
            </span>
            <span style={{ display: 'block' }}>
              <span style={{ fontWeight: 'bold' }}>Accident magnitude:</span>
              {MAGNITUDES[incident.magnitude]}
            </span>
          </td>
        ) : null}
      </React.Fragment>
    );
  }
}
export default TableRow;
