"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";
import { HiX } from "react-icons/hi";

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
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            "--normal-bg": "var(--color-green-600)",
            "--normal-text": "var(--color-white)",
            "--normal-border": "transparent",
          } as React.CSSProperties,
        });
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      toast("Error sending email. Try again later!", {
        style: {
          "--normal-bg": "var(--destructive)",
          "--normal-text": "var(--color-white)",
          "--normal-border": "transparent",
        } as React.CSSProperties,
      });
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[99]"
          />
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full xl:w-[45%] h-screen bg-white z-[100] p-8 md:p-12 shadow-2xl flex flex-col overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 text-3xl transition"
            >
              <HiX />
            </button>

            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
              Let's build.
            </h2>
            <p className="text-slate-500 mb-10">
              Tell us about your project and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-[#87CEEB] focus:ring-1 focus:ring-[#87CEEB] outline-none transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-[#87CEEB] focus:ring-1 focus:ring-[#87CEEB] outline-none transition"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-[#87CEEB] focus:ring-1 focus:ring-[#87CEEB] outline-none transition resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-[#87CEEB] transition-all flex items-center justify-center gap-2"
              >
                {isSending ? <Spinner /> : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
