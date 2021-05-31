import { Container, Row } from 'react-bootstrap';
import ExpenseForm from './components/ExpenseForm.js';
// import ExpenseTable from './components/ExpenseTable.js';

function App () {
  return (
    <Container>
      <Row className='justify-content-sm-center'>
        <h1>
          React Expense Tracker
        </h1>
      </Row>

      <ExpenseForm />
      {/* <ExpenseTable /> */}
    </Container>
  );
}

export default App;