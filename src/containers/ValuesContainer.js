import { connect } from 'react-redux';
import Values from '../components/Values';
import { getAllExpenses, getBudget } from '../redux/selectors';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getAllExpenses(state),
});

export default connect(mapStateToProps)(Values);
