import Table from 'react-bootstrap/Table'

const expenseData = {
  date: '10 / 24 / 21',
  amount: 123,
  expenseItem: 'Sofa',
  comment: 'Thrift store.'
}

function ExpenseTable ( props ) {
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

        <tbody id='list-items'>
          <th>{expenseData.date}</th>
          <th>{expenseData.amount}</th>
          <th>{expenseData.expenseItem}</th>
          <th>{expenseData.comment}</th>
        </tbody>
      </Table>
    </section>
  )
}

export default ExpenseTable;