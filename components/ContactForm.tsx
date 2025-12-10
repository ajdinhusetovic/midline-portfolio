"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Your email has been sent successfully", {
          style: {
            "--normal-bg":
              "light-dark(var(--color-green-600), var(--color-green-400))",
            "--normal-text": "var(--color-white)",
            "--normal-border":
              "light-dark(var(--color-green-600), var(--color-green-400))",
          } as React.CSSProperties,
        });
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        toast(
          "There was an error sending your email. Send us an email directly or try again later!",
          {
            style: {
              "--normal-bg":
                "light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background)))",
              "--normal-text": "var(--color-white)",
              "--normal-border": "transparent",
            } as React.CSSProperties,
          },
        );
      }
    } catch (err) {
      toast(
        "There was an error sending your email. Send us an email directly or try again later!",
        {
          style: {
            "--normal-bg":
              "light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background)))",
            "--normal-text": "var(--color-white)",
            "--normal-border": "transparent",
          } as React.CSSProperties,
        },
      );
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed top-0 right-0 w-full xl:w-[50%] h-screen bg-black/80 backdrop-blur-md z-[100] flex flex-col p-6"
        >
          <button
            onClick={onClose}
            className="self-end text-3xl text-white font-bold"
          >
            ×
          </button>

          <div className="flex flex-col flex-1 overflow-y-auto mt-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white text-center font-bold mb-6">
              Contact Us
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-6 max-w-2xl mx-auto w-full text-white text-md md:text-lg lg:text-xl pb-12"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name*"
                required
                className="border-1 w-10/12 md:w-11/12 md:h-14 p-3 md:p-4 rounded font-medium"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email adress*"
                required
                className="border-1 w-10/12 md:w-11/12 md:h-14 p-3 md:p-4 rounded font-medium"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?*"
                required
                className="border-1 resize-none w-10/12 md:w-11/12 h-40 lg:h-60 p-3 md:p-4 rounded font-medium"
              />

              {!isSending && (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7/12 md:w-5/12 mx-auto px-6 py-3 lg:py-3 rounded text-lg md:text-xl font-medium bg-blue-400 hover:bg-blue-700 cursor-pointer text-white"
                >
                  Get in Touch
                </motion.button>
              )}

              {isSending && <Spinner className="size-6 md:size-8" />}
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
