"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

function subscribeNoop() {
  return () => {};
}
function getClientSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-9 w-9 items-center justify-center rounded-(--radius) border border-(--line) text-foreground transition hover:border-(--line-strong)"
      >
        <span className="sr-only">Menú</span>
        <span
          aria-hidden="true"
          className={`absolute h-[1.5px] w-4 bg-current transition-all duration-200 ${open ? "translate-y-0 rotate-45" : "-translate-y-1.25"}`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-[1.5px] w-4 bg-current transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-[1.5px] w-4 bg-current transition-all duration-200 ${open ? "translate-y-0 -rotate-45" : "translate-y-1.25"}`}
        />
      </button>

      {/* Rendered via portal: the header uses backdrop-blur, which creates a
          containing block for fixed descendants, so this can't live inside it. */}
      {mounted && open
        ? createPortal(
            <div className="fixed inset-x-0 top-14.25 bottom-0 z-30 bg-background px-4 py-6">
              <nav className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-(--radius) px-3 py-3 text-base font-semibold text-foreground transition hover:bg-(--bg-sunken)"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
