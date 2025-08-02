// src/features/auth/authService.ts
export const login = async (email: string, password: string) => {
  return fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
