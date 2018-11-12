import React from "react";
import PropTypes from "prop-types";

import Header from "components/composables/Header";
import Footer from "components/composables/Footer";
import { CartContainer } from "./Master.styled";

const displayName = "Master";
const propTypes = {
  title: PropTypes.string.isRequired
};

function Master({ children, count, title }) {
  return (
    <CartContainer>
      <Header title={title} count={count} />
      <main>{children}</main>
      <Footer />
    </CartContainer>
  );
}

Master.displayName = displayName;
Master.propTypes = propTypes;

export default Master;
