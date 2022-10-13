import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const initialTodos = [
    {
      id: 1,
      body: "get ready",
    },
    {
      id: 2,
      body: "get money",
    },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <VStack>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        p="10"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,pink.800,pink.300,blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
      <AddTodo addTodo={addTodo}></AddTodo>
    </VStack>
  );
}

export default App;
