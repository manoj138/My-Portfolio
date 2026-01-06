import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Load env variables
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "budget", "idea"];
    let newErrors = {};
    required.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          idea: formData.idea,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="text-white relative -mt-20 px-4 md:px-6 lg:px-0"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_60%)]" />

      <motion.h2
        className="text-cyan-400 text-5xl md:text-5xl lg:text-6xl text-center font-extrabold mb-4 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center mb-10 md:mb-14 lg:mb-16 text-base md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Questions, thoughts, or just want to say hello? I'd love to hear from you.
      </motion.p>

      <section className="w-full pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-12 px-2 md:px-6">
          <motion.div
            className="w-full md:w-4/5 lg:w-1/2 bg-white/10 backdrop-blur-xl p-5 sm:p-7 md:p-8 rounded-3xl shadow-xl border border-white/20"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
              Let’s Work Together
            </h2>

            <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
              <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />

              <Input
               
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <div className="flex flex-col">
                <label className="mb-1 text-sm opacity-80">Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`p-3 rounded-xl bg-black/60 border ${
                    errors.service ? "border-red-500" : "border-white/20"
                  } text-white`}
                >
                  <option value="" disabled>
                    Something in mind?
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="UI/UX Design">UI / UX Design</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="Other">Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              <Input label="Budget" name="budget" value={formData.budget} onChange={handleChange} error={errors.budget} />

              <div className="flex flex-col">
                <label className="mb-1 text-sm opacity-80">Project Idea *</label>
                <textarea
                  rows="4"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  className={`p-3 rounded-xl bg-black/60 border ${
                    errors.idea ? "border-red-500" : "border-white/20"
                  }`}
                />
                {errors.idea && <p className="text-red-500 text-xs mt-1">{errors.idea}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 sm:mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition py-3 rounded-xl font-semibold shadow-lg"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center mt-3">Message sent successfully ✅</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-3">Failed to send message ❌</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

function Input({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm opacity-80">{label} *</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`p-3 rounded-xl bg-black/60 border ${
          error ? "border-red-500" : "border-white/20"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
