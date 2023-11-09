"use client";

import { Button } from "@/components/ui/button";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size="sm"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      title={theme === "light" ? "Enable dark theme" : "Enable light theme"}
    >
      <SunMedium
        size={20}
        className="rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"
      />
      <Moon
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
