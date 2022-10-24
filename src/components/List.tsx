import { Flex } from "@chakra-ui/react";
import { Item } from "../model/list";
import ListItem from "./ListItem";

interface Props {
  list: Item[];
  handleRemoveItem: (value: Item) => void;
}

const List = ({ list, handleRemoveItem }: Props) => {
  return (
    <Flex
      align="left"
      width={["90%", "50%", null, null]}
      direction="column"
      mt={5}
      maxH="70vh"
      minH="10vh"
      overflowY="scroll"
      className="scroll-container"
    >
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={handleRemoveItem} />
      ))}
    </Flex>
  );
};

export default List;
