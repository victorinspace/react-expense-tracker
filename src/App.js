import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        React Expense Tracker
      </header>
      <section>
        <form>
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
    </div>
  );
}

export default App;
