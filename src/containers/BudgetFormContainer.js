import { connect } from 'react-redux';
import { setBudget } from '../redux/actions';

import BudgetForm from '../components/BudgetForm';

const mapDispatchToProps = dispatch => ({
  handleSave: value => dispatch(setBudget(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
