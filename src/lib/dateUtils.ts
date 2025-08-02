// src/lib/dateUtils.ts
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}
