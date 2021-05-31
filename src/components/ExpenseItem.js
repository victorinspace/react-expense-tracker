import React from 'react';
import Button from 'react-bootstrap/Button';

function ExpenseItem ( props ) {
  return (
    <tbody>
      <tr>
        <td>{props.item.date}</td>
        <td>{props.item.amount}</td>
        <td>{props.item.item}</td>
        <td>{props.item.comment}</td>
        <td>
          <Button type='submit'>delete</Button>
        </td>
      </tr>
    </tbody>
  )
}

export default ExpenseItem;