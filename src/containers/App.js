import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* Import actions here */
import * as CanvasActions from '../actions/CanvasActions'; // Fake

/* Import components here */
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { canvasState, canvasActions } = this.props;
    return (
      <div className="">
        <div className="">Handwriting Digit Recognition</div>
        {/* notice that we then pass those unpacked props into the Counter component */}
        <Canvas canvasState={canvasState} canvasActions={canvasActions} />
        <Footer />
      </div>
    );
  }
}

/* Define propTypes here */
App.propTypes = {
  canvasState: PropTypes.number.isRequired,
  canvasActions: PropTypes.object.isRequired
};

/* Pass state to its component here */
function mapStateToProps(state) {
  return {
    canvasState: state.canvas
  };
}

/* Map actions here */
function mapDispatchToProps(dispatch) {
  return {
    canvasActions: bindActionCreators(CanvasActions, dispatch)
  };
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);