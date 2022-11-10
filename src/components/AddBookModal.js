import { useState, useRef } from "react";
import { useBookContext } from "../App";
import { v4 as uuid } from "uuid";
import {
  Input,
  Select,
  Button,
  Label,
  Textarea,
  Box,
  Heading,
  Flex,
} from "theme-ui";

export const AddBookModal = () => {
  const { books, setBooks, showAddBookModal, setShowAddBookModal } =
    useBookContext();
  const dialogRef = useRef();
  const formRef = useRef();
  const [book, setBook] = useState({
    title: "",
    review: "",
    startDate: "",
    endDate: "",
    rating: "",
    id: "",
  });

  return (
    <Box
      as={"dialog"}
      open={!!showAddBookModal}
      ref={dialogRef}
      sx={{
        borderRadius: "20px",
        margin: "20px auto",
        border: "2px solid",
        borderColor: "teal.9",
        boxShadow: "0 0 8px #2c7a7b",
        "&[open=false]": {
          display: "none",
        },
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 3,
        }}
      >
        <Heading>Add new book</Heading>
        <Button
          sx={{
            background: "none",
            color: "gray.9",
            fontSize: "1.5rem",
            padding: 0,
            margin: 0,
          }}
          onClick={() => setShowAddBookModal(false)}
        >
          X
        </Button>
      </Flex>
      <Box
        sx={{ width: "70vw", height: "60vh", maxWidth: "600px" }}
        as={"form"}
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          setBooks([...books, { ...book, id: uuid() }]);
          setBook({
            title: "",
            review: "",
            startDate: "",
            endDate: "",
            rating: "",
            id: "",
          });
          setShowAddBookModal(false);
          formRef.current.reset();
        }}
      >
        <Label sx={{ display: "flex", flexDirection: "column" }}>
          Title
          <Input
            required
            type="text"
            value={book.title}
            onChange={(event) => {
              setBook({ ...book, title: event.target.value });
            }}
          ></Input>
        </Label>
        <Label sx={{ display: "flex", flexDirection: "column" }}>
          Review
          <Textarea
            required
            value={book.review}
            onChange={(event) => {
              setBook({ ...book, review: event.target.value });
            }}
          ></Textarea>
        </Label>
        <Label sx={{ display: "flex", flexDirection: "column" }}>
          Started reading:
          <Input
            required
            type="date"
            value={book.startDate}
            onChange={(event) => {
              setBook({ ...book, startDate: event.target.value });
            }}
          ></Input>
        </Label>
        <Label sx={{ display: "flex", flexDirection: "column" }}>
          Finished reading:
          <Input
            required
            type="date"
            value={book.endDate}
            onChange={(event) => {
              setBook({ ...book, endDate: event.target.value });
            }}
          ></Input>
        </Label>
        <Label sx={{ display: "flex", flexDirection: "column" }}>
          Rating
          <Select
            value={book.rating}
            onChange={(event) => {
              setBook({ ...book, rating: event.target.value });
            }}
          >
            <option value={0}>0</option>
            <option value={0.5}>0.5</option>
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
            <option value={2.5}>2.5</option>
            <option value={3}>3</option>
            <option value={3.5}>3.5</option>
            <option value={4}>4.</option>
            <option value={4.5}>4.5</option>
            <option value={5}>5</option>
          </Select>
        </Label>
        <Button
          sx={{
            width: "100%",
            borderRadius: "20px",
            fontSize: "1rem",
            fontWeight: 600,
            marginTop: 4,
            backgroundColor: "dark",
          }}
          type="submit"
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};
