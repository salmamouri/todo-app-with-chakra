import {
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

const TodoList = () => {
  const todos = [
    {
      id: 1,
      body: "get ready",
    },
    {
      id: 2,
      body: "get money",
    },
  ];
  return (
    <VStack
      p={4}
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound="true" />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
