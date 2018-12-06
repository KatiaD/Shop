import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from './ProductItem';

const testProps = {
  handleAddToCart: jest.fn(),
  name: 'GUNMETAL SANDSTONE',
  image: '',
  price: 140,
};
describe('Given the ProductItem component', () => {
  describe('when the component is rendered', () => {
    const component = shallow(<ProductItem {...testProps} />);
    it('should render the component with provided props', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
