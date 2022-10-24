//Do the saving in the cleanable fn

export const saveToLocalStorage = (key: string, data: any): void => {
  const dataStoraged = readFromLocalStorate(key);

  localStorage.setItem(key, JSON.stringify([...dataStoraged, data]));
};

export const readFromLocalStorate = (key: string) => {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : [];
};

// export const removeFromLocalStorage = (key, item) => {
//   const dataStoraged = readFromLocalStorate(key);
// };
