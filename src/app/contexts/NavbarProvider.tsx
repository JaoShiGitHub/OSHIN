"use client";
import React, { createContext, useState, ReactNode } from "react";

interface NavbarContextType {
  darkMode: boolean;
  setDarkMode: () => void;
}

const defaultNavbarContext: NavbarContextType = {
  darkMode: false,
  setDarkMode: () => {},
};

const NavbarContext = createContext<NavbarContextType>(defaultNavbarContext);

interface NavbarProviderProps {
  children: ReactNode;
}

function NavbarProvider({ children }: NavbarProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <NavbarContext.Provider value={{ darkMode, setDarkMode: toggleDarkMode }}>
      {children}
    </NavbarContext.Provider>
  );
}

const useNavbar = () => {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export { NavbarProvider, useNavbar, NavbarContext };
