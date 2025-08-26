"use client";
import React, { createContext, useState, ReactNode } from "react";

interface NavbarContextType {
  menu: boolean;
  darkMode: boolean;
  setMenu: () => void;
  setDarkMode: () => void;
}

const defaultNavbarContext: NavbarContextType = {
  menu: false,
  darkMode: false,
  setMenu: () => {},
  setDarkMode: () => {},
};

const NavbarContext = createContext<NavbarContextType>(defaultNavbarContext);

interface NavbarProviderProps {
  children: ReactNode;
}

function NavbarProvider({ children }: NavbarProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <NavbarContext.Provider
      value={{
        darkMode,
        setDarkMode: toggleDarkMode,
        menu,
        setMenu: toggleMenu,
      }}
    >
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
