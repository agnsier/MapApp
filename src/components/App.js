import React, { Component } from 'react';
import Map from './Map'
import IncidentsList from './IncidentsList'
class App extends Component {
  render() {
    return (
        <div className="container">
          <Map/>
          <IncidentsList/>
        </div>
    );
  }
}

export default App;
