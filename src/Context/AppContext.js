'use client'
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <AppContext.Provider value={{ hoveredIcon, setHoveredIcon }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
