import { useBookContext } from "../App";
import { Card, Button, Text, Box, Flex } from "theme-ui";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { Rating } from "./Rating";

export const Book = ({ book }) => {
  const { books, setBooks, setShowEditModal, setShowEditBookModal } =
    useBookContext();

  const handleDelete = () => {
    setBooks(books.filter((bookItem) => bookItem.id !== book.id));
  };

  const handleEdit = () => {
    setShowEditModal(book.id);
    setShowEditBookModal(true);
  };
  return (
    <Card
      sx={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
        padding: "10px",
        maxWidth: "500px",
        width: "90vw",
        backgroundColor: "light",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text sx={{ fontWeight: 600, fontSize: "1.5rem" }}>{book.title}</Text>
        <Box>
          <Button
            sx={{
              backgroundColor: "light",
              padding: "10px",
            }}
            onClick={handleDelete}
          >
            <RiDeleteBinLine size={25} fill="blue.9" />
          </Button>
          <Button
            onClick={handleEdit}
            sx={{
              backgroundColor: "light",
              padding: "10px",
            }}
          >
            <CiEdit size={25} fill="blue.9" />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", color: "#14213d" }}>
        <Text>Started reading:{book.startDate}</Text>
        <Text>Finished reading:{book.endDate}</Text>
      </Box>
      <Text>My review: {book.review}</Text>
      <Flex sx={{ paddingTop: 3, justifyContent: "center" }}>
        <Rating rating={book.rating} />
      </Flex>
    </Card>
  );
};
