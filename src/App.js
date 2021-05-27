import './App.css';
import ExpenseForm from './components/ExpenseForm.js';
import ExpenseTable from './components/ExpenseTable.js';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        React Expense Tracker
      </header>
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;
