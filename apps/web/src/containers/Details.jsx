import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailsPage from '../pages/Details';
import { ApiCall } from '../store/actions';

const apiPath = 'home';

class Details extends Component {
  componentDidMount() {
    const { apiCall } = this.props;

    apiCall(apiPath);
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
  apiCall: ApiCall,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
