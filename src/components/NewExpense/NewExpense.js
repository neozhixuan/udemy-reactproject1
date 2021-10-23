import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // Passing value from child to parent:
  // - we create a function that adds ID to the object in the child.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // Pull out the key-value pairs
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const cancelFormHandler = () => {
    setIsEditing(false);
  };

  const onAddExpense = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onAddExpense}>Add new expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
