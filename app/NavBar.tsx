"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/app/components/Icon";
import "@/app/styles/navbar.css";

const LINKS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
];

type Time = "day" | "dusk" | "night";
const NEXT: Record<Time, Time> = { day: "dusk", dusk: "night", night: "day" };

export default function NavBar() {
  const pathname = usePathname();
  const [time, setTime] = useState<Time>("day");

  // Restore the saved time of day, else follow the system preference.
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("cozy-time"); } catch {}
    const start: Time =
      saved === "day" || saved === "dusk" || saved === "night"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day";
    document.documentElement.dataset.theme = start;
    setTime(start);
  }, []);

  function cycleTime() {
    const next = NEXT[time];
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("cozy-time", next); } catch {}
    setTime(next);
  }

  const label = `Time of day: ${time}. Switch to ${NEXT[time]}`;

  return (
    <header className="cz-hud nav">
      <Link href="/" className="nav__brand" aria-label="The Workshop Shelf, home">
        <span className="cz-hud__avatar" aria-hidden="true">R</span>
        <span className="cz-hud__who">
          <span className="cz-hud__name">The Workshop Shelf</span>
          <span className="cz-hud__sub">Randal&rsquo;s projects</span>
        </span>
      </Link>

      <nav className="nav__links" aria-label="Main">
        <ul>
          {LINKS.map((l) => {
            const current = l.href === pathname;
            return (
              <li key={l.href}>
                <Link href={l.href} className="nav__link" aria-current={current ? "page" : undefined}>
                  <Icon name={l.icon} size={20} />
                  <span>{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        className="cz-iconbtn"
        onClick={cycleTime}
        aria-label={label}
        title={label}
      >
        <Icon name={time === "night" ? "moon" : "sun"} />
      </button>
    </header>
  );
}
