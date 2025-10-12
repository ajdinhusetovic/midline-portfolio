"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Your email has been sent successfully");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        toast("Failed to send email.");
      }
    } catch (err) {
      toast("There was an error sending your email.");
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
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
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-white text-center font-bold mb-6">
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-6 max-w-2xl mx-auto w-full text-white text-lg lg:text-xl pb-12"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name*"
                required
                className="border-1 w-[60%] md:h-14 p-4 rounded-4xl font-semibold"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email adress*"
                required
                className="border-1 w-[60%] md:h-14 p-4 rounded-4xl font-semibold"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?*"
                required
                className="border-1 resize-none w-[80%] h-40 lg:h-60 p-4 rounded-4xl font-semibold"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                className="lg:w-[60%] mx-auto px-6 py-3 lg:py-4 rounded-4xl text-lg md:text-2xl bg-blue-400 cursor-pointer text-white font-semibold hover:bg-blue-700 transition"
              >
                Get in Touch
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
