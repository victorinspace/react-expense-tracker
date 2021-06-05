import React from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';

const ExpenseTable = ( props ) => {
  console.log( 'props: ', props );

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
              {props.expenses.map( ( expenseItem ) => {
                const { id, date, amount, item, comment } = expenseItem;
                return (
                  <tr key={id}>
                    <td>{date}</td>
                    <td>$ {amount}</td>
                    <td>{item}</td>
                    <td>{comment}</td>
                    <td>
                      <Button onClick={() => props.delete( id )} type='submit' variant='danger'>delete</Button>
                    </td>
                  </tr>
                )
              } )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default ExpenseTable;