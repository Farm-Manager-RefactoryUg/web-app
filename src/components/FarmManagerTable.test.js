import React from 'react';
import ReactDOM from 'react-dom';
import FarmManagerTable from './FarmManagerTable';


it("Component FarmManagerTable renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<FarmManagerTable />, div)
  ReactDOM.unmountComponentAtNode(div)
});

