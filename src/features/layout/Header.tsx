"use client";

import { CSSProperties, useEffect, useState } from "react";
import { ThemeToggle } from "../theme/ThemeToggle";

export function Header() {
  useEffect(() => {
    const navOpenBtn = document.querySelector(".btn-open")!;
    const navCloseBtn = document.querySelector(".btn-close")!;
    const nav = document.querySelector(".nav")!;
    let opened = false;

    navOpenBtn.addEventListener("click", toggleNav);
    navCloseBtn.addEventListener("click", toggleNav);

    function toggleNav() {
      if (opened) nav.classList.remove("nav--opened");
      else nav.classList.add("nav--opened");
      opened = !opened;
    }
  }, [document]);

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
              <span className="nav--item-link">HOME</span>
            </li>
            <li
              className="nav--item"
              style={{ "--item-index": 1 } as CSSProperties}
            >
              <span className="nav--item-link">ABOUT</span>
            </li>
            <li
              className="nav--item"
              style={{ "--item-index": 2 } as CSSProperties}
            >
              <span className="nav--item-link">CONTACT</span>
            </li>
            <li
              className="nav--item"
              style={{ "--item-index": 3 } as CSSProperties}
            >
              <span className="nav--item-link">SOMETHING</span>
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

      <div className="support">
        <a href="https://codepen.io/vickkietrake" target="_blank">
          <i className="fab fa-codepen"></i>
        </a>

        <a href="https://www.instagram.com/u.z.i.__/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://dribbble.com/trake" target="_blank">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </>
  );
}
