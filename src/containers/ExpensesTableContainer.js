import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';
import ExpensesTable from '../components/ExpensesTable';
import { getAllExpenses } from '../redux/selectors';

const mapStateToProps = state => ({
  items: getAllExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
