import { useEffect, useState } from "react";
export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (initialValue === undefined) {
      initialValue = "";
    }

    let value = JSON.parse(window.localStorage.getItem(key)) || initialValue;
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
