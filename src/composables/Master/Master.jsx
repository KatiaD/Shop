import React from 'react';
import PropTypes from 'prop-types';

import Header from 'composables/Header';

import Footer from 'composables/Footer';

import { CartMainContainer, CartContainer, MasterWrapper } from './Master.styled';

const displayName = 'Master';

const propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const defaultProps = {

};

function Master({ children, total, title }) {
  return (
    <MasterWrapper>
      <Header title={title} total={total} />
      <CartMainContainer>
        <CartContainer>
          {children}
        </CartContainer>
      </CartMainContainer>
      <Footer />
    </MasterWrapper>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;
Master.defaultProps = defaultProps;

export default Master;
