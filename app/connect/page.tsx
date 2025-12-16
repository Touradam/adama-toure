"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactMethods = [
  {
    title: "Email",
    description: "For inquiries and collaboration",
    value: "contact@adamatoure.com",
    link: "mailto:contact@adamatoure.com",
  },
  {
    title: "LinkedIn",
    description: "Professional networking",
    value: "Connect on LinkedIn",
    link: "#",
  },
  {
    title: "Twitter",
    description: "Thoughts and updates",
    value: "@adamatoure",
    link: "#",
  },
];

const interests = [
  "Speaking engagements",
  "Research collaboration",
  "Consulting projects",
  "Educational partnerships",
  "Community initiatives",
  "Technical advisory",
];

export default function ConnectPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Thank you for your message! I'll get back to you soon.");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="container-custom mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-display md:text-display-lg font-display mb-6 text-balance">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            I'm always interested in meaningful conversations about energy
            security, climate resilience, and sustainable innovation. Reach out
            to discuss collaboration, speaking opportunities, or just to chat.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="container-custom mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-neutral-200 rounded-xl hover:border-accent-600 hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-neutral-900">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container-custom mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-display-sm md:text-display font-display mb-8 text-center">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all resize-none"
                placeholder="Tell me more..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center">
            I'm Particularly Interested In
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {interests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium hover:bg-accent-100 hover:text-accent-700 transition-colors"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

