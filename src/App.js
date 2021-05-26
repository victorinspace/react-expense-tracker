import './App.css';

function ExpenseForm () {
  return (
    <section>
      <form id='expense-form'>
        <label for='date'>Date:</label>
        <input id='date' type='date' className='form-input' autoFocus required />
        <label for='amount'>Amount:</label>
        <input id='amount' type='number' className='form-input' required />
        <label for='item'>Item:</label>
        <input id='item' type='text' className='form-input' required />
        <label for='comment'>Comment (Optional):</label>
        <input id='comment' type='text' className='form-input' />
        <button type='submit' className='form-button'>Add Expense Item</button>
      </form>
    </section>
  )
}

function ExpenseTable () {
  return (
    <section>
      <table id='expense-table'>
        <thead>
          <tr classNam='table-header'>
            <th>Date</th>
            <th>Amount</th>
            <th>Expense Item</th>
            <th>Comments</th>
            <th></th>
          </tr>
        </thead>

        <tbody id='list-items'></tbody>
      </table>
    </section>
  )
}

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
