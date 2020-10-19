import React from 'react';
import PropTypes from 'prop-types';

function Details({ status }) {
  return (
    <section>
      Got status from api: {status}
    </section>
  );
}

Details.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Details;
