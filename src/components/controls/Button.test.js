import React from 'react';
import { shallow } from 'enzyme';
import { ButtonBase, styleCreator } from './Button';

describe('Given the ButtonBase component', () => {
  const testProps = {
    onClick: jest.fn(),
    style: {},
    children: 'Click Me!',
  };

  let component;

  describe('when the component is rendered', () => {
    beforeEach(() => {
      component = shallow(<ButtonBase {...testProps} />);
    });

    describe('and the button is accent', () => {
      beforeAll(() => {
        testProps.accent = true;
      });

      it('should render the button element with accent style', () => {
        expect(component.find({ type: 'button', style: testProps.style, onClick: testProps.onClick }).type()).toBe(
          'button',
        );
      });
    });
  });
});

describe('Given the styleCreator', () => {
  const theme = {
    colorAccent: 'red',
    colorDefault: 'black',
  };
  const testProps = {
    accent: false,
  };

  describe('when the styleCreator is called', () => {
    let style;

    beforeEach(() => {
      style = styleCreator(theme, testProps);
    });

    describe('and the type of the button is accent', () => {
      beforeAll(() => {
        testProps.accent = true;
      });

      it('should return accent button style', () => {
        expect(style).toEqual({
          backgroundColor: theme.colorAccent,
        });
      });
    });

    describe('and the button is default button', () => {
      beforeAll(() => {
        testProps.accent = false;
      });

      it('should return default button style', () => {
        expect(style).toEqual({
          backgroundColor: theme.colorDefault,
        });
      });
    });
  });
});
