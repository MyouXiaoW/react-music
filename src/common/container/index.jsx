import React, {Component, Fragment} from 'react';
import Nav from '../nav';
import Title from 'Common/title';
export default WrappendComponent => {
  return class Container extends Component {
    render() {
      return (
        <Fragment>
          <Title />
          <WrappendComponent />
          <Nav {...this.props} />
        </Fragment>
      );
    }
  };
};
