// src/components/ui/Button.tsx
export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-red-500 text-white">{children}</button>
  );
}
