import React from 'react';
import PropTypes from 'prop-types';
import { Product, CartIcon } from 'components/widgets';

const displayName = 'Redux';

const propTypes = {
  myProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

function Redux({
  myProducts,
}) {
  return (
    <main>
      <div>
        <CartIcon />
      </div>
      <div>
        {myProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}

Redux.displayName = displayName;
Redux.propTypes = propTypes;

export default Redux;
