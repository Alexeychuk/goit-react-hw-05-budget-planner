import { connect } from 'react-redux';
import { addExpense } from '../redux/actions';
import ExpenseForm from '../components/ExpenseForm.jsx';

const mapDispatchToProps = dispatch => ({
  onSave: expense => dispatch(addExpense(expense)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
