import React from 'react';
import { render } from '@testing-library/react';
//import App from './App';
import Requisitions from './components/Requisitions';

test("renders See more orders link", () => {
  const { getByText } = render(<Requisitions />);
  const linkElement = getByText(/See more orders/i);
  expect(linkElement).toBeInTheDocument();
});
