import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React from 'react';



class ExpenseForm extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange ( event ) {
    this.setState( { value: event.target.value } )
  }

  handleSubmit ( event ) {
    alert( `submitted ${this.state.value}` );
    event.preventDefault();
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
                  id='date'
                  type='date'
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Form.Group>
            {/* <Form.Group>
              <Col>
                <Form.Label htmlFor='amount'>Amount:</Form.Label>
                <Form.Control id='amount' type='number' required />
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label htmlFor='item'>Item:</Form.Label>
                <Form.Control id='item' type='text' required />
              </Col>
            </Form.Group>
            <Form.Group>
              <Col>
                <Form.Label htmlFor='comment'>Comment (Optional):</Form.Label>
                <Form.Control id='comment' type='text' />
              </Col>
            </Form.Group> */}

            <Col>
              <Button type='submit' variant='primary' >Add Expense</Button>
            </Col>
          </Form.Row>
        </Form>

      </Container>
    )
  }
}

export default ExpenseForm;