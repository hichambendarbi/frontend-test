import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state: any) => {
  return {
    result: state.result,
  };
};

export default connect(mapStateToProps)(App);
