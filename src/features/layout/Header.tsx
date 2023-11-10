"use client";

import Link from "next/link";
import { CSSProperties, useEffect, useState } from "react";

export function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const navOpenBtn = document.querySelector(".btn-open")!;
      const navCloseBtn = document.querySelector(".btn-close")!;
      const nav = document.querySelector(".nav")!;
      let opened = false;

      const toggleNav = () => {
        if (opened) nav.classList.remove("nav--opened");
        else nav.classList.add("nav--opened");
        opened = !opened;
      };

      navOpenBtn.addEventListener("click", toggleNav);
      navCloseBtn.addEventListener("click", toggleNav);
    }
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav--inner">
          <button className="btn--nav btn-close" data-btn-close>
            <div className="burger">
              <span></span>
            </div>
          </button>
          <ul>
            <li
              className="nav--item"
              style={{ "--item-index": 0 } as CSSProperties}
            >
              <Link href="/">
                <span className="nav--item-link">HOME</span>
              </Link>
            </li>
            <li
              className="nav--item"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              <Link href="/actus">
                <span className="nav--item-link">ABOUT</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <header>
        <button className="btn--nav btn-open" data-btn-open>
          <div className="burger">
            <span></span>
          </div>
          <span className="btn--text">Voillaume</span>
        </button>
      </header>
    </>
  );
}
