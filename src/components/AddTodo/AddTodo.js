import { Button, HStack, Input } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  };
  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add to Do
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
