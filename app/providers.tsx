"use client";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";
interface RootProps {
  children: React.ReactNode;
}

const Providers = ({ children }: RootProps) => {
  const [currentColor, setCurrentColor] = useState(false);
  useEffect(() => {
    setCurrentColor(true);
  }, []);

  if (!currentColor) {
    return <>{children}</>;
  }
  return (
    <>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  );
};

export default Providers;
