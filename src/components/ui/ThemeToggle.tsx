"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Icon } from "./Icons";

type Theme = "dark" | "light";

const STORAGE_KEY = "procurli-theme";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/** The pre-paint script in the document head owns the real value; dark is
 *  the brand default and the safe server-side assumption. */
function getServerSnapshot(): Theme {
  return "dark";
}

function setTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage blocked — the choice simply won't persist */
  }
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Enable colour transitions only after hydration, so the first paint is instant.
  useEffect(() => {
    document.documentElement.classList.add("theme-ready");
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="grid size-8 place-items-center rounded-chip border border-line text-muted transition-colors hover:border-line-2 hover:text-fg"
    >
      {theme === "dark" ? (
        <Icon.sun width={14} height={14} />
      ) : (
        <Icon.moon width={14} height={14} />
      )}
    </button>
  );
}
