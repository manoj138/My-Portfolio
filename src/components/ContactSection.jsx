import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          service: form.service,
          budget: form.budget,
          idea: form.idea,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setForm({ name: "", email: "", service: "", budget: "", idea: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white/10 backdrop-blur border border-white/20 rounded-2xl space-y-4"
    >
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-3 rounded bg-black/40 border border-white/20 w-full" />

      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded bg-black/40 border border-white/20 w-full" />

      <input name="service" placeholder="Service" value={form.service} onChange={handleChange} className="p-3 rounded bg-black/40 border border-white/20 w-full" />

      <input name="budget" placeholder="Budget" value={form.budget} onChange={handleChange} className="p-3 rounded bg-black/40 border border-white/20 w-full" />

      <textarea name="idea" placeholder="Project Idea" value={form.idea} onChange={handleChange} className="p-3 rounded bg-black/40 border border-white/20 w-full" />

      <button type="submit" className="w-full py-3 bg-blue-600 rounded-xl">
        {status === "sending" ? "Sending..." : "Send"}
      </button>

      {status === "success" && <p className="text-green-400">Message sent ✔</p>}
      {status === "error" && <p className="text-red-400">Failed ❌</p>}
    </form>
  );
}
