import React from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import ExpenseTable from './ExpenseTable';

class ExpenseForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: '',
      amount: 0,
      item: '',
      comment: '',
      expenses: []
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.deleteItem = this.deleteItem.bind( this );
  }

  componentDidMount () {
    console.log( 'form:', this.state.form );
    console.log( 'id', Date.now() )
  }

  handleChange ( e ) {
    const { name, value } = e.target;
    console.log( 'name: ', name, 'value: ', value );
    this.setState( {
      [name]: value
    } )
  }

  handleSubmit ( event ) {
    event.preventDefault();

    const expenseItem = {
      id: Date.now(),
      date: this.state.date,
      amount: this.state.amount,
      item: this.state.item,
      comment: this.state.comment,
    }

    this.setState( {
      expenses: [...this.state.expenses, expenseItem],
      date: '',
      amount: 0,
      item: '',
      comment: ''
    } )
  }

  deleteItem ( id ) {
    const removedItem = this.state.expenses.filter( expense => expense.id !== id );
    console.log( 'Removed item: ', removedItem );

    // this.setState( {
    //   expenses: removedItem
    // } )
  }

  render () {
    return (
      <Container>
        <Row>
          <Form id='expense-form' onSubmit={this.handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='date'>*Date:</Form.Label>
                  <Form.Control
                    name='date'
                    type='date'
                    placeholder=''
                    value={this.state.date}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='amount'>*Amount:</Form.Label>
                  <Form.Control
                    name='amount'
                    type='number'
                    placeholder=''
                    value={this.state.amount}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='item'>*Item:</Form.Label>
                  <Form.Control
                    placeholder=''
                    name='item'
                    value={this.state.item}
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor='comment'>Comment (Optional):</Form.Label>
                  <Form.Control
                    name='comment'
                    placeholder=''
                    value={this.state.comment}
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

        <ExpenseTable expenses={this.state.expenses} delete={( this.deleteItem )} />
      </Container>
    )
  }
}

export default ExpenseForm;