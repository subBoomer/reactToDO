// Import React and the useState hook
import React, { useState } from 'react'

// Define the TodoInput component
export default function TodoInput(props) {
  // Destructure the props object to extract the necessary functions and values
  const { handleAddTodos, todoValue, setTodoValue } = props

  // Return the JSX for the TodoInput component
  return (
    <header>
      {/* Input field to enter a new to-do item */}
      <input
        // Set the value of the input field to the current to-do value
        value={todoValue}
        // Update the to-do value when the input field changes
        onChange={(e) => {
          // Set the to-do value to the new value entered by the user
          setTodoValue(e.target.value)
        }}
        // Display a placeholder text in the input field
        placeholder='Enter todo...'
      />
      {/* Button to add the new to-do item to the list */}
      <button
        // Call the handleAddTodos function when the button is clicked
        onClick={() => {
          // Add the new to-do item to the list
          handleAddTodos(todoValue)
          // Clear the input field by setting the to-do value to an empty string
          setTodoValue('')
        }}
      >
        Add
      </button>
    </header>
  )
}