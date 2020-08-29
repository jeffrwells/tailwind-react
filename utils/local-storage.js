export const getLocalStorageEntry = (key: string) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const removeLocalStorageEntry = (key: string) => localStorage.removeItem(key);

export const setLocalStorageEntry = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));
