export const actionTypes = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  SET_BUDGET: 'SET_BUDGET',
};

export const addExpense = expense => ({
  type: actionTypes.ADD_EXPENSE,
  payload: { expense },
});

export const removeExpense = id => ({
  type: actionTypes.REMOVE_EXPENSE,
  payload: { id },
});

export const setBudget = value => ({
  type: actionTypes.SET_BUDGET,
  payload: { budget: value },
});
