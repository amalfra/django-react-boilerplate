import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('renders', () => {
    const { getByText } = render(<Home />);
    const bodyText = getByText(/this is home page/i);
    expect(bodyText).toBeInTheDocument();
  });
});
