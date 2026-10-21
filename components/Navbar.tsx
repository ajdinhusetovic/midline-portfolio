"use client";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
const items = [
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/our-work" },
  { label: "The studio", href: "/about-us" },
  { label: "Our approach", href: "/why-us" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width:1024px)");
    const close = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  return (
    <nav aria-label="Main navigation" className="studio-nav">
      <div className="wrap nav-inner">
        <Link href="/" className="wordmark" aria-label="Midline Code home">
          <Image
            src="/logo.svg"
            alt="Midline Code"
            width={146}
            height={66}
            className="studio-logo"
            priority
          />
          <small>
            Creative
            <br />
            marketing studio
          </small>
        </Link>
        <div className="desktop-nav">
          {items.map((i) => (
            <Link key={i.href} href={i.href}>
              {i.label}
            </Link>
          ))}
          <Link className="primary-link" href="/contact">
            Let’s talk <ArrowUpRight size={15} />
          </Link>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="menu-button" aria-label="Open navigation menu">
              <Menu size={23} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-overlay" />
            <Dialog.Content className="mobile-nav">
              <div className="flex justify-between items-center">
                <Dialog.Title>Midline Code</Dialog.Title>
                <Dialog.Close asChild>
                  <button aria-label="Close navigation menu">
                    <X />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">
                Explore our studio, services, and work.
              </Dialog.Description>
              <nav aria-label="Mobile navigation">
                {items.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="primary-link"
                >
                  Start a conversation ↗
                </Link>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </nav>
  );
}
