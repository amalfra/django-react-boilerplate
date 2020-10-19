import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailsPage from '../pages/Details';
import { ApiCall } from '../store/actions';
import { getApiCall } from '../store/selectors';

const apiPath = 'home';

class Details extends Component {
  componentDidMount() {
    const { apiCall } = this.props;

    apiCall(apiPath);
  }

  render() {
    const { homeApiCall } = this.props;

    if (!homeApiCall || homeApiCall.pending) {
      return 'Loading...';
    }

    const { resp: homeApiCallResp } = homeApiCall;

    return (
      <DetailsPage status={homeApiCallResp.status} />
    );
  }
}

const mapStateToProps = state => ({
  homeApiCall: getApiCall(state, apiPath),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  apiCall: ApiCall,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
