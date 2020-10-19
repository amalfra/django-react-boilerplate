import React from 'react';
import { render } from '@testing-library/react';

import Details from './Details';

const status = 'testing-status';

describe('Details', () => {
  it('renders', () => {
    const { getByText } = render(<Details status={status} />);
    const bodyText = getByText(new RegExp(status, 'i'));
    expect(bodyText).toBeInTheDocument();
  });
});
