import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React from 'react';



class ExpenseForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      form: {
        date: '2018-04-12',
        amount: null,
        item: 'Pillow',
        comment: 'Target'
      }
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange ( event ) {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState( { [name]: value } )
  }

  handleSubmit ( event ) {
    event.preventDefault();
    alert( `submitted ${this.state.form.date}, ${this.state.form.item}, ${this.state.form.date}, ${this.state.form.comment}` );
  }

  render () {
    return (
      <Container>
        <Form id='expense-form' onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Col>
                <Form.Label htmlFor='date'>Date:</Form.Label>
                <Form.Control
                  name='date'
                  type='date'
                  value={this.state.form.date}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label htmlFor='amount'>Amount:</Form.Label>
                <Form.Control
                  name='amount'
                  type='number'
                  value={this.state.form.amount}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label htmlFor='item'>Item:</Form.Label>
                <Form.Control
                  type='text'
                  name='item'
                  value={this.state.form.item}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label htmlFor='comment'>Comment (Optional):</Form.Label>
                <Form.Control
                  name='comment'
                  type='text'
                  value={this.state.form.comment}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>

            <Col>
              <Button type='submit' variant='primary'>Add Expense</Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    )
  }
}

export default ExpenseForm;