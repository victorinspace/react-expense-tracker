import React from 'react'
import { Button } from 'react-bootstrap'


const ExpenseRow = ( { expenses, deleteItem } ) => {
  return expenses.map( ( expenseItem ) => {
    const { id, date, amount, item, location } = expenseItem;
    return (
      <tr key={id}>
        <td>{date}</td>
        <td>$ {amount}</td>
        <td>{item}</td>
        <td>{location}</td>
        <td>
          <Button
            onClick={() => deleteItem( id )}
            type='submit'
            variant='danger'
          >
            delete
          </Button>
        </td>
      </tr>
    );
  } );
};

export default ExpenseRow;