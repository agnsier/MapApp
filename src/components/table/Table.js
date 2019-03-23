import React, { Component } from 'react';
import { TableHeaders } from './TableHeaders';
import TableRow from './TableRow';
import { selectIncident, unSelectIncident } from '../../actions';
import { connect } from 'react-redux';
import './Table.css';

class Table extends Component {
  handleExpand = incident => {
    const newExpandedRows = [...this.props.selectedIncidents];
    const isInExpandedRows = newExpandedRows.includes(incident.id);
    if (isInExpandedRows) {
      this.props.unSelectIncident(incident.id);
    } else {
      this.props.selectIncident(incident.id);
    }
  };

  render() {
    const { incidents, selectedIncidents, headers } = this.props;
    return (
      <table className="table">
        <thead>
          <TableHeaders data={headers} />
        </thead>
        <tbody>
          {incidents.map((incident, key) => (
            <TableRow
              key={key}
              data={incident}
              selectedIncidents={selectedIncidents}
              onClick={this.handleExpand}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectIncident: incident => dispatch(selectIncident(incident)),
  unSelectIncident: incident => dispatch(unSelectIncident(incident)),
});

export default connect(
  null,
  mapDispatchToProps
)(Table);
