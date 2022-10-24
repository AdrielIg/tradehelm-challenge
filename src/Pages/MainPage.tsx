import { useEffect, useState } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import Form from "../components/Form";
import { Item, Status } from "../model/list";
import api from "../api";
import List from "../components/List";

const MainPage = () => {
  const [list, setList] = useState<Item[]>([]);
  const [status, setStatus] = useState<Status>(Status.Initial);

  useEffect(() => {
    setTimeout(async () => {
      const items = await api.getList();
      setList(items);
      setStatus(Status.Loaded);
    }, 2000);
  }, []);

  const handleAddItem = async (value: string) => {
    const id = uuid();
    const item = { value, id };
    setList((state) => [...state, item]);
    await api.addItem(item);
  };

  const handleRemoveItem = async (value: Item) => {
    const itemsFiltered = list.filter((item) => item.id !== value.id);
    setList(itemsFiltered);
    await api.removeItem(value);
  };

  return (
    <Flex
      bgGradient={[
        "linear(to-tr, rgba(56,183,181,0.8), rgba(56,183,181,0.5))",
        "linear(to-b, rgba(60,175,173,1), rgba(56,183,181,0.8))",
      ]}
      h="100vh"
      color="white"
      align="center"
      justify="start"
      direction="column"
    >
      <Form onAdd={handleAddItem} />

      {status === Status.Initial ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mt={10}
        />
      ) : (
        <List handleRemoveItem={handleRemoveItem} list={list} />
      )}
    </Flex>
  );
};

export default MainPage;
