import React from 'react';
import PropTypes from 'prop-types';

import Header from 'composables/Header';
import Footer from 'composables/Footer';
import {
  CartContainer,
  CartMainContainer
} from './Master.styled';

const displayName = 'Master';
const propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number,
  children: PropTypes.element
};

function Master({ title, total, children }) {
  return (
    <CartContainer>
      <Header title={title} total={total} />
      <CartMainContainer>{children}</CartMainContainer>
      <Footer />
    </CartContainer>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;

export default Master;