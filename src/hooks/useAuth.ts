// src/hooks/useAuth.ts
import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from API
  }, []);

  return { user };
}
