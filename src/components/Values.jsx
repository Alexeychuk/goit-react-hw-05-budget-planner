import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Stat from './Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ expenses, budget }) => {
  const resultExpenses =
    expenses.length === 0
      ? 0
      : expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const balance = budget - resultExpenses;

  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={resultExpenses} />
      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Values;
