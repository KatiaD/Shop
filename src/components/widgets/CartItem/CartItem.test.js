import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';

const testProps = {
  handlePlusItem: jest.fn(),
  handleMinusItem: jest.fn(),
  name: 'GUNMETAL SANDSTONE',
  id: 1,
  price: 140,
  image: '',
  quantity: 1,
  controls: true,
};

describe('Given the CartItem component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CartItem {...testProps} />);
  });
  describe('when the component is rendered with controls', () => {
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when the component is rendered without controls', () => {
    beforeAll(() => {
      testProps.controls = false;
    });
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
