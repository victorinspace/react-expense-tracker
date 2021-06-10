import React from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';

const ExpenseForm = ( {
  date,
  amount,
  item,
  location,
  handleChange,
  handleSubmit
} ) => {
  return (
    <Container className="pt-5" fluid>
      <Form id='expense-form' onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label htmlFor='date'>*Date:</Form.Label>
              <Form.Control
                name='date'
                type='date'
                placeholder=''
                value={date}
                onChange={handleChange}
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
                value={amount}
                onChange={handleChange}
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
                value={item}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor='location'>Location:</Form.Label>
              <Form.Control
                name='location'
                placeholder=''
                value={location}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Button
                style={{ marginTop: '25px' }}
                type='submit'
                variant='primary'
              >
                Add Expense
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  )
}

export default ExpenseForm;