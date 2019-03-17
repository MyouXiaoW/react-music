import React, {Component, Fragment} from 'react';
import Nav from '../nav';
export default WrappendComponent => {
  return class Container extends Component {
    render() {
      return (
        <Fragment>
          <WrappendComponent />
          <Nav {...this.props} />
        </Fragment>
      );
    }
  };
};
