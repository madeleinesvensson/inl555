import { useBookContext } from "../App";
import { Box, Text } from "theme-ui";

export const Footer = () => {
  const thisYear = new Date().getFullYear();
  const { books, readingGoal } = useBookContext();
  const yearlyBooks = books.filter((book) => book.endDate.startsWith(thisYear));
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        height: "70px",
        backgroundColor: "yellow.6",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
      }}
    >
      {readingGoal ? (
        <Text>
          You've read {yearlyBooks.length} of {readingGoal} books this year
        </Text>
      ) : (
        <Text>Set a reading goal</Text>
      )}
    </Box>
  );
};
