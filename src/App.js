import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ExpenseForm from './components/ExpenseForm.js';
import ExpenseTable from './components/ExpenseTable.js';

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      date: '',
      amount: 0,
      item: '',
      location: '',
      expenses: []
    };

    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
    this.deleteItem = this.deleteItem.bind( this );
  }

  componentDidMount () {
    const localStorageExpenses = JSON.parse( localStorage.getItem( 'expenses' ) ) || [];

    this.setState( {
      expenses: localStorageExpenses
    } );
  }

  componentDidUpdate ( prevProps, prevState ) {
    if ( this.state.expenses !== prevState.expenses.length ) {
      localStorage.setItem( 'expenses', JSON.stringify( this.state.expenses ) );
    }
  }

  handleChange ( e ) {
    const { name, value } = e.target;

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
      location: this.state.location,
    }

    this.setState( {
      expenses: [...this.state.expenses, expenseItem],
      date: '',
      amount: 0,
      item: '',
      location: ''
    } )
  }

  deleteItem ( id ) {
    const removedItem = this.state.expenses.filter( expense => expense.id !== id );

    this.setState( {
      expenses: removedItem
    } )
  }

  render () {
    return (
      <Container>
        <Row className='justify-content-sm-center'>
          <h1>
            React Expense Tracker
          </h1>
        </Row>

        <ExpenseForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          date={this.state.date}
          amount={this.state.amount}
          item={this.state.item}
          location={this.state.location}
        />
        <ExpenseTable expenses={this.state.expenses} deleteItem={( this.deleteItem )} />
      </Container>
    );
  }
}

export default App;