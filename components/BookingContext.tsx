"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import BookingModal from "./BookingModal";

interface BookingContextValue {
  open: (plan: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  return (
    <BookingContext.Provider value={{ open: setActivePlan }}>
      {children}
      {activePlan && (
        <BookingModal plan={activePlan} onClose={() => setActivePlan(null)} />
      )}
    </BookingContext.Provider>
  );
}
