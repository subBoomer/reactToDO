// Import React hooks and components
import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

// Define the App component
function App() {
  // Create state variables for the to-do list and the current to-do value
  const [todos, setTodos] = useState([]) // Initialize to-do list as an empty array
  const [todoValue, setTodoValue] = useState('') // Initialize to-do value as an empty string

  // Function to persist data to local storage
  function persistsData(newList) {
    // Convert the to-do list to a JSON string and store it in local storage
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  // Function to add a new to-do item to the list
  function handleAddTodos(newTodo) {
    // Create a new to-do list by adding the new item to the existing list
    const newTodoList = [...todos, newTodo]
    // Persist the new list to local storage
    persistsData(newTodoList)
    // Update the state with the new list
    setTodos(newTodoList)
  }

  // Function to delete a to-do item from the list
  function handleDeleteTodo(index) {
    // Create a new to-do list by filtering out the item at the specified index
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    // Persist the new list to local storage
    persistsData(newTodoList)
    // Update the state with the new list
    setTodos(newTodoList)
  }

  // Function to edit a to-do item
  function handleEditTodo(index) {
    // Get the value of the to-do item to be edited
    const valueToBeEdited = todos[index]
    // Set the current to-do value to the value to be edited
    setTodoValue(valueToBeEdited)
    // Delete the original to-do item from the list
    handleDeleteTodo(index)
  }

  // Use the useEffect hook to load data from local storage when the component mounts
  useEffect(() => {
    // Check if local storage is available
    if (!localStorage) {
      return
    }
    // Load the to-do list from local storage
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      // Parse the stored to-do list from JSON
      const parsedTodos = JSON.parse(storedTodos)
      // Update the state with the loaded to-do list
      setTodos(parsedTodos.todos)
    }
  }, [])

  // Render the TodoInput and TodoList components
  return (
    <div>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  )
}

export default App