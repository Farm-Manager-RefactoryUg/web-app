import React from 'react';
import ReactDOM from 'react-dom';
import Bargraph from './Bargraph';


it("Component Bargraph renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bargraph />, div)
  ReactDOM.unmountComponentAtNode(div)
});

