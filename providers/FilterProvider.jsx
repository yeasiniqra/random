"use client";
import { createContext, useState, useContext } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <FilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
