import React from 'react';
import {render} from '@testing-library/react-native';
import {Routes} from 'navigation';

import {SpendingLimitScreen} from './SpendingLimit';
import {NavigatorMock} from '../../../__mocks__/NavigatorMock';

let rendered: any;

const components = [{screen: SpendingLimitScreen, name: Routes.SpendingLimit}];

describe('DebitCard screen', () => {
  it('renders correctly', () => {
    rendered = render(<NavigatorMock components={components} />);
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.getByTestId('spending-limit-screen')).toBeDefined();
  });

  it('has elements in screen', async () => {
    rendered = render(<NavigatorMock components={components} />);
    expect(rendered.getByTestId('spend-limit-number')).toBeDefined();
    expect(rendered.getByTestId('btn-save')).toBeDefined();
  });
});
