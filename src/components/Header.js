import { Box, Heading } from "theme-ui";

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "gray.9",
        height: "70px",
        margin: "0px 20px",
        borderRadius: "10px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Heading sx={{ color: "white", fontSize: "3rem" }}>BookTracker</Heading>
    </Box>
  );
};
