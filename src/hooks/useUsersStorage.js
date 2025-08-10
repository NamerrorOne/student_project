import { useEffect, useState } from "react";

export const useUsersStorage = () => {
  const STORAGE_KEY = "users";
  const [usersStorage, setUsersStorage] = useState([]);

  const saveUsers = (newUsers) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
    setUsersStorage(newUsers);
  };

  useEffect(() => {
    try {
      const item = localStorage.getItem(STORAGE_KEY);
      if (item) {
        const parsed = JSON.parse(item);
        setUsersStorage(parsed);
      } else {
        setUsersStorage([]);
      }
    } catch (error) {
      console.error(`Error parsing localStorage key "${STORAGE_KEY}":`, error);
      setUsersStorage([]);
    }
  }, []);

  return [usersStorage, saveUsers];
};
