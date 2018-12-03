import React from 'react';
import { mount } from 'enzyme';
import { createSink } from 'recompose';

import { enhance } from './CartItemContainer';

describe('Given the CartItemContainer enhancer', () => {
  const testProps = {
    id: 1,
    minus: jest.fn(),
    plus: jest.fn(),
    control: true,
  };

  let providedProps;

  describe('when the enhancer is applied', () => {
    beforeEach(() => {
      const DummyCartItemContainer = enhance(
        createSink(
          props => {
          providedProps = props;
          }));

      mount(<DummyCartItemContainer {...testProps} />);
    });

    it('should pass provided properties', () => {
      expect(providedProps).toMatchObject(testProps);
    });

    describe('and the handleMinusItem is called', () => {
      beforeEach(() => {
        providedProps.handleMinusItem();
      });
      it('should call the minus handler', () => {
        expect(testProps.minus).toHaveBeenCalledWith(testProps.id);
      });

      describe('and the handlePlusItem is called', () => {
        beforeEach(() => {
          providedProps.handlePlusItem();
        });

        it('should call the plus handler', () => {
          expect(testProps.plus).toHaveBeenCalledWith(testProps.id);
        });
      });
    });
  });
});
