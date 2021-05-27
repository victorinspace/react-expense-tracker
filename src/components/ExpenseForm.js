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

export default ExpenseForm;