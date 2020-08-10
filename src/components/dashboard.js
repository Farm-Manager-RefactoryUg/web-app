import React from 'react';
import Navbar from 'Navbar.js'
import Stats from 'stats.js'
import Graphs from 'Graphs.js'
import Activities from 'Activities.js'

function Dashboard() {
  return (
    <div className="App">
        <Navbar />
        <Stats />
        <Graphs />
        <Activities />
    </div>
  );
}

export default Dashboard;

