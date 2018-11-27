import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Given the Header component', () => {
  describe('when the component is rendered', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Header/>);
    });

    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});