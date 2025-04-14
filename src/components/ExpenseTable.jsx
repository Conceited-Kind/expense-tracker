import React from 'react';

function ExpenseTable({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-table">
      {expenses.length === 0 ? (
        <p>No expenses found. Add some expenses to get started!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Amount (KSH)</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{expense.amount.toLocaleString()}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>
                  <button
                    onClick={() => onDeleteExpense(expense.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseTable;
