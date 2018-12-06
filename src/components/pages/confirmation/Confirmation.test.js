import React from 'react';
import { shallow } from 'enzyme';

import Confirmation from './Confirmation';

const testProps = {
  myProducts: [],
  total: 500,
  values: {},
  quantity: {},
};

describe('Given a ConfirmationPage component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeAll(() => {
      component = shallow(<Confirmation {...testProps} />);
    });

    it('should match the snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
