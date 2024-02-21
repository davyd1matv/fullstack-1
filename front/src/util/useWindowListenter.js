import { useEffect } from "react";

// Перенесено із App файлу

export function useWindowListenter(eventType, listener) {
  useEffect(() => {
    window.addEventListener(eventType, listener);

    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
