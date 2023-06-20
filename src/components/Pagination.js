import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Pagination = ({ currentPage, totalPages, onChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1);
    }
  };

  return (
    <Box>
      <ButtonGroup variant="outline" spacing="2">
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          rightIcon={<ChevronRightIcon />}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Pagination;
