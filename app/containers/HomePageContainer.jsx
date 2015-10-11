import React from 'react';
import {Link} from 'react-router';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CwdActions from '../actions/cwd.js';

function mapStateToProps(state) {
  return {
    cwd: state.cwd
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CwdActions, dispatch);
}


class HomePageContainer extends React.Component {

  static defaultProps = {};

  render() {
    const {dispatch, cwd, refresh_cwd} = this.props;
    return (
      <div>
        <h2>Home Page2</h2>
        <p>{cwd}</p>
        <button onClick={() => refresh_cwd("/home/creek")}>Refresh CWD</button>
        <Link to="about">to About</Link>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);

