"use client";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
const navItems = [
  { label: "Services", href: "/services" },
  { label: "Why us", href: "/why-us" },
  { label: "About", href: "/about-us" },
  { label: "Our work", href: "/our-work" },
  { label: "Process", href: "/#our-process" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-24">
        <Link href="/" aria-label="Midline Code home">
          <Image
            src="/1.svg"
            width={90}
            height={90}
            alt="Midline Code"
            className="h-20 w-20 object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-700 hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-700"
          >
            Request a quote
          </Link>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="lg:hidden p-3 text-3xl text-slate-900"
            >
              <HiMenu aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[60] bg-slate-900/40" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <Dialog.Title className="text-xl font-bold text-slate-900">
                  Navigation
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="p-3 text-3xl text-slate-900"
                  >
                    <HiX aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">
                Explore Midline Code or request a website quote.
              </Dialog.Description>
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-3"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-bold text-slate-900 p-3 rounded-xl hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 px-6 py-4 rounded-xl text-center bg-slate-900 text-white font-bold"
                >
                  Request a quote
                </Link>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </nav>
  );
}
