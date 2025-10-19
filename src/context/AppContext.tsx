"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type AppContextType = { items: Array<any> };

const AppContext = createContext<AppContextType | undefined>(undefined);

export const ArtworksProvider = AppContext.Provider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useArtworkss must be used within ArtworksProvider");
  return context;
};

export const AppProvider = ({ children, initialProducts }: { children: ReactNode; initialProducts: Array<any> }) => {
  const [items, setItems] = useState<Array<any>>(initialProducts);

  return (
    <AppContext.Provider value={{ items }}>
      {children}
    </AppContext.Provider>
  );
};
