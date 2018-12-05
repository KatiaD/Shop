import React from 'react';
import { mount } from 'enzyme';
import { createSink } from 'recompose';

import { enhance } from './ProductItemContainer';

describe('Given the ProductItemContainer enhancer', () => {
  const testProps = {
    id: 1,
    AddToCart: jest.fn(),
  };

  let providedProps;

  describe('when the enhancer is applied', () => {
    beforeEach(() => {
      const DummyContainer = enhance(
        createSink((props) => {
          providedProps = props;
        }),
      );

      mount(<DummyContainer {...testProps} />);
    });

    it('should pass provided properties', () => {
      expect(providedProps).toMatchObject(testProps);
    });

    describe('and the handleAddToCart is called', () => {
      beforeEach(() => {
        providedProps.handleAddToCart();
      });

      it('should call the AddToCart handler', () => {
        expect(testProps.AddToCart).toHaveBeenCalledWith(testProps.id);
      });
    });
  });
});
