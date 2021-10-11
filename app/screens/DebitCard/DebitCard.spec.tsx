import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Routes} from 'navigation';

import {DebitCardScreen} from './DebitCard';
import {NavigatorMock} from '../../../__mocks__/NavigatorMock';

let rendered: any;

const components = [{screen: DebitCardScreen, name: Routes.DebitCard}];

describe('DebitCard screen', () => {
  it('renders correctly', () => {
    rendered = render(<NavigatorMock components={components} />);
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.getByTestId('debit-card-screen')).toBeDefined();
  });

  it('has elements in screen', async () => {
    rendered = render(<NavigatorMock components={components} />);
    expect(rendered.getByTestId('available-balance')).toBeDefined();
    expect(rendered.getByTestId('debit-card')).toBeDefined();
    expect(rendered.getByTestId('menu')).toBeDefined();
    waitFor(() => {
      expect(rendered.getByTestId('item-weekly-spending-limit')).toBeDefined();
    });
  });
});
