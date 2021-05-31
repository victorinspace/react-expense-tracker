import React from 'react';
import { Container, Col, Row, Form, Button, Table } from 'react-bootstrap';
// import ExpenseItem from './ExpenseItem';

// let expenseDataArray = [{}];

class ExpenseForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      form: [
        {
          id: 1,
          date: '',
          amount: 0,
          item: '',
          comment: ''
        }
      ]
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
    // this.addExpenseToTable = this.addExpenseToTable.bind( this );
  }

  // expense = expenseDataArray.map( item => )

  handleChange ( event ) {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState( {
      form: {
        ...this.state.form,
        [name]: value
      }
    } );
  }

  handleSubmit ( event ) {
    event.preventDefault();
    console.log( `submitted: ${this.state.form.date}, ${this.state.form.item}, ${this.state.form.date}, ${this.state.form.comment}` );

  }

  renderExpenseItem () {
    return this.state.form.map( ( expenseItem, index ) => {
      const { id, date, amount, item, comment } = expenseItem;
      return (
        <tr key={id}>
          <td>{date}</td>
          <td>{amount}</td>
          <td>{item}</td>
          <td>{comment}</td>
          <td>
            <Button type='submit'>delete</Button>
          </td>
        </tr>
      )
    }
    );
  }

  render () {
    return (
      <Container>
        <Row>
          <Form id='expense-form' onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='date'>Date:</Form.Label>
                  <Form.Control
                    name='date'
                    type='date'
                    placeholder=''
                    value={this.state.form.date}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='amount'>Amount:</Form.Label>
                  <Form.Control
                    name='amount'
                    type='number'
                    placeholder=''
                    value={this.state.form.amount}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='item'>Item:</Form.Label>
                  <Form.Control
                    placeholder=''
                    name='item'
                    value={this.state.form.item}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='comment'>Comment (Optional):</Form.Label>
                  <Form.Control
                    name='comment'
                    placeholder=''
                    value={this.state.form.comment}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Button type='submit' variant='primary'>Add Expense</Button>
              </Col>
            </Form.Row>
          </Form>
        </Row>

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
                {this.renderExpenseItem()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ExpenseForm;