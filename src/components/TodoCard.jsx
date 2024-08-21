// Import React
import React from 'react'

// Define the TodoCard component
export default function TodoCard(props) {
  // Destructure the props object to extract the necessary values and functions
  const { children, handleDeleteTodo, index, handleEditTodo } = props

  // Return the JSX for the TodoCard component
  return (
    // List item to display a single to-do item
    <li className='todoItem'>
      {/* Display the to-do item text, which is passed as a child component */}
      {children}
      {/* Container for the edit and delete buttons */}
      <div className='actionsContainer'>
        {/* Button to edit the to-do item */}
        <button
          // Call the handleEditTodo function when the button is clicked
          onClick={() => {
            // Pass the index of the to-do item to the handleEditTodo function
            handleEditTodo(index)
          }}
        >
          {/* Icon for the edit button */}
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        {/* Button to delete the to-do item */}
        <button
          // Call the handleDeleteTodo function when the button is clicked
          onClick={() => {
            // Pass the index of the to-do item to the handleDeleteTodo function
            handleDeleteTodo(index)
          }}
        >
          {/* Icon for the delete button */}
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}