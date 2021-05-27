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

export default ExpenseTable;