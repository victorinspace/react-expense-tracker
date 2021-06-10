import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import ExpenseRow from './ExpenseRow';

const ExpenseTable = ( { expenses, deleteItem } ) => {
  return (
    <div>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr >
                <th>Date</th>
                <th>Amount</th>
                <th>Expense Item</th>
                <th>Comments</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <ExpenseRow expenses={expenses} deleteItem={deleteItem} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default ExpenseTable;