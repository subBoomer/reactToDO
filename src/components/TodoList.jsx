// Import React and the TodoCard component
import React from 'react'
import TodoCard from './TodoCard'

// Define the TodoList component
export default function TodoList(props) {
  // Destructure the props object to extract the to-do list
  const { todos } = props

  // Return the JSX for the TodoList component
  return (
    // Unordered list to display the to-do items
    <ul className='main'>
      {/* Map over the to-do list and render a TodoCard for each item */}
      {todos.map((todo, todoIndex) => {
        // Return a TodoCard component for each to-do item
        return (
          <TodoCard
            // Pass all props to the TodoCard component
            {...props}
            // Set a unique key for each TodoCard component
            key={todoIndex}
            // Pass the index of the to-do item as a prop
            index={todoIndex}
          >
            {/* Display the to-do item as a paragraph */}
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}