import React from 'react'
import ExpenditurePieChart from './ExpenditurePieChart'
import SalesBarGraph from './SalesBarGraph'

function Graph() {
    return (
      <>
        <SalesBarGraph />
        <ExpenditurePieChart />
      </>
    );
}

export default Graph