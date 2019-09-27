import { connect } from 'react-redux';
import { getAllExpenses } from '../redux/selectors';
import App from '../components/App';

const mapStateToProps = state => ({
  expenses: getAllExpenses(state),
});

export default connect(mapStateToProps)(App);
