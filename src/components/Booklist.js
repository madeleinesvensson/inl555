import { useBookContext } from "../App";
import { Book } from "./Book";
import { Box } from "theme-ui";

export const Booklist = () => {
  const { books } = useBookContext();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </Box>
  );
};
