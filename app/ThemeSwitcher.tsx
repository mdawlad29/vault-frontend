"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { Box } from "@mui/material";

const ThemeSwitcher = () => {
  const [currentColor, setCurrentColor] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme || "dark");
    setCurrentColor(true);
  }, [setTheme]);

  if (!currentColor) {
    return null;
  }

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        className="dark:!bg-neutral bg-gray-800 text-neutral dark:text-black fixed left-0 top-[50%] cursor-pointer px-4 py-2 rounded-tr rounded-br hover:scale-105 hover:translate-x-1 duration-500 ease-in-out z-40"
      >
        {theme === "light" ? (
          <MdDarkMode className="inline-block w-6 h-6" />
        ) : (
          <BsFillSunFill className="inline-block w-6 h-6" />
        )}
      </Box>
    </>
  );
};

export default ThemeSwitcher;
