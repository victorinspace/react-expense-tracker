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
          <tr>
            <td>{expenseData.date}</td>
            <td>{expenseData.amount}</td>
            <td>{expenseData.expenseItem}</td>
            <td>{expenseData.comment}</td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}

export default ExpenseTable;