import { useState, useRef, useEffect } from "react";
import { useBookContext } from "../App";
import {
  Input,
  Select,
  Button,
  Label,
  Textarea,
  Heading,
  Box,
  Flex,
} from "theme-ui";

export const EditBookModal = () => {
  const {
    books,
    setBooks,
    setShowEditModal,
    showEditModal,
    setShowEditBookModal,
  } = useBookContext();
  const editingBook = books.find((book) => book.id === showEditModal);
  const dialogRef = useRef();
  const [book, setBook] = useState({
    title: editingBook?.title ?? "",
    review: editingBook?.review ?? "",
    startDate: editingBook?.startDate ?? "",
    endDate: editingBook?.endDate ?? "",
    rating: editingBook?.rating ?? "",
    id: editingBook?.id ?? "",
  });

  useEffect(() => {
    if (showEditModal) {
      setBook({
        title: editingBook?.title,
        review: editingBook?.review,
        startDate: editingBook?.startDate,
        endDate: editingBook?.endDate,
        rating: editingBook?.rating,
        id: editingBook?.id,
      });
    }
    // eslint-disable-next-line
  }, [showEditModal]);
  const handleUpdate = () => {
    setBooks(
      books.reduce((acc, curr) => {
        if (curr.id === showEditModal) {
          acc.push(book);
        } else {
          acc.push(curr);
        }
        return acc;
      }, [])
    );
    setShowEditModal(false);
    setShowEditBookModal(false)
  };

  return (
    <Box
      as={"dialog"}
      open={!!showEditModal}
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
        <Heading>Edit</Heading>
        <Button
          sx={{
            background: "none",
            color: "gray.9",
            fontSize: "1.5rem",
            padding: 0,
            margin: 0,
          }}
          onClick={() => {
            setShowEditModal(false);
            setShowEditBookModal(false);
          }}
        >
          X
        </Button>
      </Flex>
      <Box
        sx={{ width: "70vw", height: "60vh", maxWidth: "600px" }}
        as={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
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
            required
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
          Save
        </Button>
      </Box>
    </Box>
  );
};
