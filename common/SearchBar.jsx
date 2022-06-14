import React from "react";
import {
  Text,
  Heading,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ handleChange, value, type }) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        onChange={handleChange}
        value={value}
        type="text"
        placeholder={`Find ${
          type === "coaches-and-staff" ? "Staff" : "Players"
        }`}
        size="lg"
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchBar;
