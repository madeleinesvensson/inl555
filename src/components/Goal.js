import { useBookContext } from "../App";
import { Input, Label, Box } from "theme-ui";

export const Goal = () => {
  const { readingGoal, setReadingGoal } = useBookContext();

  return (
    <Box sx={{ margin: "20px auto", maxWidth: "350px" }}>
      <Label sx={{ display: "block" }}>
        Yearly goal:
        <Input
          type="number"
          value={readingGoal}
          onChange={(e) => setReadingGoal(e.target.value)}
        ></Input>
      </Label>
    </Box>
  );
};
