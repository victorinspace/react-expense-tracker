import Table from 'react-bootstrap/Table'

function ExpenseTable () {
  return (
    <section>
      <Table id='expense-table' striped bordered hover>
        <thead>
          <tr >
            <th>Date</th>
            <th>Amount</th>
            <th>Expense Item</th>
            <th>Comments</th>
            <th></th>
          </tr>
        </thead>

        <tbody id='list-items'></tbody>
      </Table>
    </section>
  )
}

export default ExpenseTable;