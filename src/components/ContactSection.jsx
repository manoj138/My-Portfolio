import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);

    // Send email
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,       // matches {{name}} in template
          email: formData.email,     // matches {{email}} in template
          subject: formData.subject, // matches {{subject}} in template
          message: formData.message, // matches {{message}} in template
        }
      )
      .then(() => {
        alert("Message sent successfully 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Something went wrong. Try again.");
      })
      .finally(() => setSending(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl space-y-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
      {errors.name && <small className="text-red-400">{errors.name}</small>}

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
      {errors.email && <small className="text-red-400">{errors.email}</small>}

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
      {errors.subject && <small className="text-red-400">{errors.subject}</small>}

      <textarea
        name="message"
        placeholder="Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/20 focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
      />
      {errors.message && <small className="text-red-400">{errors.message}</small>}

      <button
        type="submit"
        disabled={sending}
        className="w-full py-3 font-semibold rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-gray-900 disabled:opacity-60"
      >
        {sending ? "Sending..." : "Send Message"}
        
      </button>
    </form>
  );
}
