"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../mock/portfolio";

export function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sectionIds = ["#home", ...navLinks.map((link) => link.href)];

    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveLink(`#${visibleSection.target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400 font-black text-zinc-950">
            {personalInfo.name.charAt(0)}
          </span>

          <div className="leading-tight">
            <strong className="block text-sm text-white">
              {personalInfo.name}
            </strong>
            <span className="text-xs text-zinc-400">Front-end Engineer</span>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-300"
                    : "text-zinc-400 hover:text-cyan-300"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-cyan-300 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <a
          href={personalInfo.resume}
          className="hidden rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-zinc-950 md:inline-flex"
        >
          Currículo
        </a>
      </nav>
    </header>
  );
}