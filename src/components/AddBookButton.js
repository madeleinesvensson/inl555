import { useBookContext } from "../App";
import { Button } from "theme-ui";

export const AddBook = () => {
  const { setShowAddBookModal, showEditBookModal, showAddBookModal } =
    useBookContext();

  const handleOpenAddBookModal = () => {
    setShowAddBookModal(true);
  };

  return (
    <>
      {!(showAddBookModal || showEditBookModal) ? (
        <Button
          sx={{
            position: "fixed",
            bottom: "13vh",
            right: "5vw",
            borderRadius: "50%",
            fontSize: "2rem",
            height: "60px",
            width: "60px",
            padding: 0,
            zIndex: 2,
            backgroundColor: "dark",
          }}
          onClick={handleOpenAddBookModal}
        >
          +
        </Button>
      ) : null}
    </>
  );
};
