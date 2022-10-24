import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import { Dispatch, SetStateAction, useState } from "react";
import { Item } from "../model/list";

interface Props {
  onAdd: (value: string) => void;
}

const Form = ({ onAdd }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = (value: string) => {
    onAdd(value);
    setInputValue("");
  };

  return (
    <Box
      width={[
        "90%", // 0-30em
        "50%", // 30em-48em
        null, // 48em-62em
        null, // 62em+
      ]}
      mt={10}
    >
      <FormControl>
        <FormLabel>Type your next item</FormLabel>
        <Flex alignItems="center" gap="5">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton
            onClick={() => handleAdd(inputValue)}
            colorScheme="teal"
            aria-label="Call Segun"
            size="lg"
            icon={<AddIcon />}
          />
        </Flex>
        <FormHelperText>We'll added to the list</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Form;
