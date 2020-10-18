import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailsPage from '../pages/Details';
import { ApiGet } from '../store/actions';

class Details extends Component {
  componentDidMount() {
    const { apiGet } = this.props;

    apiGet('home');
  }

  render() {
    return (
      <DetailsPage />
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  apiGet: ApiGet,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
