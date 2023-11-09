"use client";

import { ThemeToggle } from "../theme/ThemeToggle";
import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed border-b border-b-accent mb-2 w-full">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-800 focus:outline-none lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="hidden lg:flex space-x-4">
            <NavLink href="/" label="Accueil" />
            <NavLink href="/page2" label="Page 2" />
            <NavLink href="/page3" label="Page 3" />
            <NavLink href="/page4" label="Page 4" />
            <NavLink href="/page5" label="Page 5" />
            <NavLink href="/page6" label="Page 6" />
            <NavLink href="/page7" label="Page 7" />
            <NavLink href="/page8" label="Page 8" />
            <NavLink href="/page9" label="Page 9" />
            <NavLink href="/page10" label="Page 10" />
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <NavLink href="/" label="Accueil" />
            <NavLink href="/page2" label="Page 2" />
            <NavLink href="/page3" label="Page 3" />
            <NavLink href="/page4" label="Page 4" />
            <NavLink href="/page5" label="Page 5" />
            <NavLink href="/page6" label="Page 6" />
            <NavLink href="/page7" label="Page 7" />
            <NavLink href="/page8" label="Page 8" />
            <NavLink href="/page9" label="Page 9" />
            <NavLink href="/page10" label="Page 10" />
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, label }: { href: string; label: ReactNode }) => {
  return (
    <a href={href} className="text-foreground hover:text-primary transition">
      {label}
    </a>
  );
};
