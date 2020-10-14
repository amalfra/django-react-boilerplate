import React from 'react';
import { render } from '@testing-library/react';

import Details from './Details';

test('renders', () => {
  const { getByText } = render(<Details />);
  const bodyText = getByText(/this is details page/i);
  expect(bodyText).toBeInTheDocument();
});
