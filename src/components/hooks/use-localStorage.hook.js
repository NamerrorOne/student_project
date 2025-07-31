import { useEffect, useState } from "react";

export const useLocalStorage = (key) => {
  const [usersStorage, setUsersStorage] = useState();

  const saveUsers = (newUsers) => {
    localStorage.setItem(key, JSON.stringify(newUsers));
    setUsersStorage(newUsers);
  };

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        setUsersStorage(parsed);
      } else {
        setUsersStorage(null);
      }
    } catch (error) {
      console.error(`Error parsing localStorage key "${key}":`, error);
      setUsersStorage(null);
    }
  }, []);

  return [usersStorage, saveUsers];
};
