import React, { useState } from "react";
import { motion } from "framer-motion";
console.log(motion);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required";

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    alert("Message sent successfully!");

    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <motion.div
      className="text-white relative -top-10 px-4 md:px-0"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_60%)]" />

      <motion.h2
        className="text-cyan-400 text-5xl md:text-6xl text-center font-extrabold mb-3 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center mb-16 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Questions, thoughts, or just want to say hello? I'd love to hear from you.
      </motion.p>

      <motion.div
        className="max-w-3xl mx-auto relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,.6)] border border-white/10 transition-all duration-500 hover:shadow-[0_30px_80px_-10px_rgba(0,0,0,.9)]"
        initial={{ scale: 0.92, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition ${
                errors.name ? "border border-red-500" : "border border-white/10"
              }`}
            />

            <label className="absolute left-4 top-4 text-gray-400 text-sm
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm transition-all"
            >
              Your Name
            </label>

            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
            )}
          </motion.div>

          {/* EMAIL */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition ${
                errors.email ? "border border-red-500" : "border border-white/10"
              }`}
            />

            <label className="absolute left-4 top-4 text-gray-400 text-sm
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm transition-all"
            >
              Your Email
            </label>

            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </motion.div>

          {/* SUBJECT */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition ${
                errors.subject ? "border border-red-500" : "border border-white/10"
              }`}
            />

            <label className="absolute left-4 top-4 text-gray-400 text-sm
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm transition-all"
            >
              Subject
            </label>

            {errors.subject && (
              <p className="text-red-500 mt-1 text-sm">{errors.subject}</p>
            )}
          </motion.div>

          {/* MESSAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full p-4 rounded-xl bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition resize-none ${
                errors.message ? "border border-red-500" : "border border-white/10"
              }`}
            />

            <label className="absolute left-4 top-4 text-gray-400 text-sm
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-1 peer-focus:text-cyan-400 peer-focus:text-sm transition-all"
            >
              Your Message
            </label>

            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
            )}
          </motion.div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            className="w-full bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-400 transition text-gray-900 font-bold p-4 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,.8)] transform hover:scale-[1.03]"
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
          >
            <span>Send Message</span>
            <i className="fas fa-paper-plane" />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
