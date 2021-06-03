import React from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';

const ExpenseTable = ( props ) => {
  console.log( 'props: ', props );

  // const deleteItem = ( id ) => {
  //   console.log( 'delete' );
  //   // const { id, date, amount, item, comment } = expenseItem;

  //   const removedItem = props.expenses.filter( expense => expense.id !== id );

  //   console.log( removedItem );

  //   // if the expense ID matches the id passed in
  //   // then filter that out. --> this will return all items
  //   // without the matched item.

  //   // then update state

  // }

  return (
    <Container>
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
                    <td>{amount}</td>
                    <td>{item}</td>
                    <td>{comment}</td>
                    <td>
                      <Button onClick={props.deleteItem} type='submit' variant='danger'>delete</Button>
                    </td>
                  </tr>
                )
              } )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default ExpenseTable;