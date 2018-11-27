import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Given the Footer component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Footer/>);
    });

    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});