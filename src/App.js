import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <VStack>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        p="6"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,pink.800,pink.300,blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList></TodoList>
    </VStack>
  );
}

export default App;
