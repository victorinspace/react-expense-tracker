import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';

class ExpenseTable extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      message: "",
      items: []
    }
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
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
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Button type='submit'>delete</Button>

                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ExpenseTable;