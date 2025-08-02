// src/middleware/authMiddleware.ts
import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return NextResponse.redirect("/login");
  }
}
