import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'Messi_10',
      name: ' Football Jersey',
      description: 'InterMiami Jersey',
      amount: 3500,
      category: 'Football',
      date: '2025-02-05',
    },
    {
      id: 'Deadlift_Monster',
      name: 'Gym Membership',
      description: '6 Month premium gym membership',
      amount: 8000,
      category: 'Fitness',
      date: '2025-02-24', 
    },
    {
      id: 'Uzumaki_Shadow',
      name: 'Naruto Hoodie',
      description: 'Akatsuki cloud pattern hoodie',
      amount: 4500,
      category: 'Anime',
      date: '2025-03-04',
    },
    {
      id: 'Nyama_Choma',
      name: 'Nyama Choma',
      description: 'Grilled meat with ugali and kachumbari',
      amount: 1800,
      category: 'Food',
      date: '2025-03-10',
    },
    {
      id: 'Sarova_White_Sands',
      name: 'Beach Resort',
      description: 'Weekend getaway at Sarova White Sands',
      amount: 20000,
      category: 'Travel',
      date: '2025-04-08',
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const addExpense = (newExpense) => {
    setExpenses(prev => [...prev, newExpense]);
    setFilteredExpenses(prev => [...prev, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
    setFilteredExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(
        expenses.filter((expense) =>
          expense.name.toLowerCase().includes(term.toLowerCase()) ||
          expense.category.toLowerCase().includes(term.toLowerCase())
        ));  
    }
  };
  
 
  return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>
      
      <div className="expense-tracker">
        <div className="expense-form-section">
          <h2>Add New Expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </div>

        <div className="expense-list-section">
          <h2>Expenses</h2>
          <SearchBar onSearch={handleSearch} />
          <ExpenseTable
            expenses={filteredExpenses}
            onDeleteExpense={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;