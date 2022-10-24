import { Item } from "./model/list";

const LOCAL_STORAGE_KEY = "list";

class ApiMock {
  key = "";

  constructor(keyValue: string) {
    this.key = keyValue;
  }

  getList = async (): Promise<Item[]> => {
    const items = localStorage.getItem(this.key);
    return items !== null ? JSON.parse(items) : [];
  };

  addItem = async (item: Item) => {
    const items = await this.getList();
    localStorage.setItem(this.key, JSON.stringify([...items, item]));
    return item;
  };

  removeItem = async (item: Item) => {
    const items = await this.getList();
    const itemsFiltered = items.filter((x) => x.id !== item.id);
    localStorage.setItem(this.key, JSON.stringify(itemsFiltered));
    return item.id;
  };
}

const api = new ApiMock(LOCAL_STORAGE_KEY);

export default api;
