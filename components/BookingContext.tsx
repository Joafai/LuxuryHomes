"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingContextValue {
  /** Plan picked from a pricing card; sent along with the lead form. */
  plan: string | null;
  selectPlan: (plan: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<string | null>(null);
  return (
    <BookingContext.Provider value={{ plan, selectPlan: setPlan }}>
      {children}
    </BookingContext.Provider>
  );
}
