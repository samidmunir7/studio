import { createContext, useContext, useState, type ReactNode } from "react";

export type ServiceItem = {
  id: string;
  name: string;
  cost: number;
};

type BookingContextType = {
  selectedServices: ServiceItem[];
  setSelectedServices: (services: ServiceItem[]) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  return (
    <BookingContext.Provider value={{ selectedServices, setSelectedServices }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context)
    throw new Error("useBooking must be used within a BookingProvider");
  return context;
};
