import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import ExpenseForm from './components/ExpenseForm.js';
import ExpenseTable from './components/ExpenseTable.js';

function App () {
  return (
    <Container>
      <Row className='justify-content-lg-center'>
        <h1>
          React Expense Tracker
        </h1>
      </Row>

      <Row>
        <Col>
          <ExpenseForm />
        </Col>
      </Row>

      <Row>
        <Col>
          <ExpenseTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
