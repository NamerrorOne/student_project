import { useEffect, useState } from "react";
import { IUser } from "../models/user.model";

export const useUsersStorage = () => {
  const STORAGE_KEY: string = "users";
  const [usersStorage, setUsersStorage] = useState<IUser[]>([]);

  const saveUsers = (newUsers: IUser[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
    setUsersStorage(newUsers);
  };

  useEffect(() => {
    try {
      const item: string | null = localStorage.getItem(STORAGE_KEY);
      if (item) {
        const parsed: IUser[] = JSON.parse(item);
        setUsersStorage(parsed);
      } else {
        setUsersStorage([]);
      }
    } catch (error) {
      console.error(`Error parsing localStorage key "${STORAGE_KEY}":`, error);
      setUsersStorage([]);
    }
  }, []);

  return [usersStorage, saveUsers] as const;
};
