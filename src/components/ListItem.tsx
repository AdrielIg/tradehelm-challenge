import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Item as Item } from "../model/list";

interface Props {
  item: Item;
  onRemove: (value: Item) => void;
}

const ListItem = ({ item, onRemove }: Props) => {
  return (
    <motion.div
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0, y: 30 }}
    >
      <Tag
        key={item.id}
        m={2}
        size="lg"
        variant="subtle"
        colorScheme="green"
        justifyContent="space-between"
      >
        <TagLabel>{item.value}</TagLabel>
        <TagCloseButton onClick={() => onRemove(item)} />
      </Tag>
    </motion.div>
  );
};

export default ListItem;
