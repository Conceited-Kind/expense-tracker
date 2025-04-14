import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState({
    name: '',
    description: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!expense.name || !expense.amount || !expense.category || !expense.date) {
      alert('Please fill in all required fields.');
      return;
    }

    const newExpense = {
      ...expense,
      id: `${expense.category}_${Math.random().toString(36).substr(2, 9)}`,
      amount: Number(expense.amount),
      date: new Date(expense.date).toISOString().split('T')[0],
    };

    onAddExpense(newExpense);
    setExpense({
      name: '',
      description: '',
      amount: '',
      category: '',
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label htmlFor="expense-name">Enter Expense Name</label>
        <input
          type="text"
          id="expense-name"
          name="name"
          value={expense.name}
          onChange={handleChange}
          placeholder="Enter expense name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Enter Expense Description</label>
        <textarea
          id="expense-description"
          name="description"
          value={expense.description}
          onChange={handleChange}
          placeholder="Enter expense description"
          rows="3"
        />
      </div>
      <div className="form-group">
        <label htmlFor="expense-amount">Enter Amount (KSH)</label>
        <input
          type="number"
          id="expense-amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="0.00"
          min="0"
          step="0.01"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expense-category">Enter Expense Category</label>
        <select
          id="expense-category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Travel">Travel</option>
          <option value="Housing">Housing</option>
          <option value="Insurance">Insurance</option>
          <option value="Gifts">Gifts</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Subscriptions">Subscriptions</option>
          <option value="Savings">Savings</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="expense-date">Select Date (MM/DD/YYYY)</label>
        <input
          type="date"
          id="expense-date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
