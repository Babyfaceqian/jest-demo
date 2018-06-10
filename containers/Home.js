import HomeView from '../views/HomeView';
import * as homeActions from '../actions/home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    const { home } = state;
    return {
        home
    }
}

function mapDispatchToProps(dispatch) {
    const actions = { ...homeActions };
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);