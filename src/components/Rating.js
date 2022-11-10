import { Flex, Box } from "theme-ui";
import { BsBookFill, BsBookHalf, BsBook } from "react-icons/bs";

export const Rating = ({ rating }) => {
  return (
    <Flex sx={{ gap: 4 }}>
      {new Array(5).fill(0).map((_v, i) => {
        const value = i + 1;
        const isHalfValue = rating - i === 0.5;
        const Book = () => {
          if (rating > value) {
            return <Box as={BsBookFill} size={24} color={"dark"} />;
          } else if (isHalfValue) {
            return <Box as={BsBookHalf} size={24} color={"dark"} />;
          } else {
            return <BsBook size={24} />;
          }
        };
        return <Book key={i} />;
      })}
    </Flex>
  );
};
