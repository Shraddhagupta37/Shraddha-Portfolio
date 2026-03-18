import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { personalInfo } from "../../data/content";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mail = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mail;

    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-32 min-h-screen flex items-center overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - Heading + Visual Panel */}
          <div className="space-y-12">
            {/* Section Header - Now on the left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-wider" style={{ color: 'var(--accent-gold)' }}>
                  // get in touch
                </span>
                <div className="h-px w-12" style={{ 
                  background: `linear-gradient(90deg, var(--accent-gold), transparent)`
                }} />
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-xl">
                Have a project in mind? I'm always excited to hear about new ideas.
              </p>
            </motion.div>

            {/* Visual Panel - Now with heading above it */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 border-2 border-[var(--accent-gold)]/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-[var(--accent-copper)]/20 rounded-full"
              />

              {/* Double borders - rounded */}
              <div className="absolute inset-0 border-2 translate-x-3 translate-y-3 rounded-2xl -z-10"
                   style={{ borderColor: 'var(--accent-gold)' }} />
              <div className="absolute inset-0 border-2 translate-x-1.5 translate-y-1.5 rounded-2xl -z-5"
                   style={{ borderColor: 'var(--accent-copper)', opacity: 0.4 }} />
              
              {/* Main card */}
              <div className="relative bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-2xl p-10
                            overflow-hidden group-hover:border-[var(--accent-gold)] transition-colors duration-300">
                
                {/* Animated gradient orbs inside */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <motion.div
                    animate={{
                      x: [0, 50, 0],
                      y: [0, -30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--accent-gold)] blur-3xl"
                  />
                  <motion.div
                    animate={{
                      x: [0, -40, 0],
                      y: [0, 40, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[var(--accent-copper)] blur-3xl"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Status with animated pulse */}
                  <div className="flex items-center gap-3 mb-8">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-mono text-[var(--text-secondary)]">Available for work</span>
                  </div>

                  {/* Creative message */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                  >
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--accent-gold)] font-semibold">Let's build something great together.</span> 
                      <br />Whether you have a project in mind or just want to chat about tech, I'm always open to new conversations.
                    </p>
                  </motion.div>

                  {/* Interactive social links */}
                  <div className="flex gap-4">
                    {[
                      { icon: FiGithub, href: personalInfo.github, color: 'var(--accent-gold)' },
                      { icon: FiLinkedin, href: personalInfo.linkedin, color: 'var(--accent-copper)' }
                    ].map((item, i) => (
                      <motion.a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, rotate: i === 0 ? 2 : -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group/icon"
                      >
                        <div className="absolute inset-0 border-2 translate-x-1 translate-y-1 rounded-lg -z-10"
                             style={{ borderColor: item.color }} />
                        <div className="relative p-4 border-2 border-[var(--border)] rounded-lg bg-[var(--card-bg)]
                                      group-hover/icon:border-[var(--accent-gold)] transition-all duration-300">
                          <item.icon className="w-5 h-5 text-[var(--text-secondary)] 
                                             group-hover/icon:text-[var(--accent-gold)]" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Corner accents */}
                <motion.div
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-gold)] opacity-30"
                />
                <motion.div
                  animate={{ rotate: [0, -90, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-copper)] opacity-30"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Form Panel with Sharp Edges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative group mt-20 lg:mt-0"
          >
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border border-dashed border-[var(--accent-gold)]/20 rounded-full"
            />

            {/* Double borders - sharp edges */}
            <div className="absolute inset-0 border-2 translate-x-3 translate-y-3 -z-10"
                 style={{ borderColor: 'var(--accent-copper)' }} />
            <div className="absolute inset-0 border-2 translate-x-1.5 translate-y-1.5 -z-5"
                 style={{ borderColor: 'var(--accent-gold)', opacity: 0.4 }} />
            
            {/* Form container */}
            <div className="relative bg-[var(--card-bg)] border-2 border-[var(--border)] p-10
                          group-hover:border-[var(--accent-gold)] transition-colors duration-300">
              
              {/* Title with animated arrow */}
              <motion.h3 
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-display font-bold mb-8 flex items-center gap-2"
              >
                <span className="bg-gradient-to-r from-[#B8860B] to-[#B87333] bg-clip-text text-transparent">
                  Send a Message
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiArrowUpRight className="text-[var(--accent-gold)]" />
                </motion.div>
              </motion.h3>

              <div className="space-y-6">
                {/* Form fields with interactive hover effects */}
                {[
                  { label: "NAME", name: "name", type: "text", placeholder: "John Doe", color: "var(--accent-gold)" },
                  { label: "EMAIL", name: "email", type: "email", placeholder: "hello@example.com", color: "var(--accent-copper)" },
                ].map((field) => (
                  <motion.div
                    key={field.name}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group/field"
                  >
                    <label className="block text-xs font-mono mb-2 text-[var(--text-secondary)] 
                                    group-hover/field:text-[var(--accent-gold)] transition">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full bg-transparent border-2 border-[var(--border)] px-4 py-3 
                               outline-none transition-all duration-300
                               focus:border-[var(--accent-gold)] hover:border-[var(--accent-gold)]/50
                               text-[var(--text-primary)]"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                {/* Message field */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group/field"
                >
                  <label className="block text-xs font-mono mb-2 text-[var(--text-secondary)] 
                                  group-hover/field:text-[var(--accent-silver)] transition">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-transparent border-2 border-[var(--border)] px-4 py-3 
                             outline-none transition-all duration-300 resize-none
                             focus:border-[var(--accent-silver)] hover:border-[var(--accent-silver)]/50
                             text-[var(--text-primary)]"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Submit button with creative hover - RESTORED */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full mt-4 group/btn overflow-hidden border-2 border-[var(--border)]
                           hover:border-[var(--accent-gold)] transition-colors duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Animated gradient background on hover */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-copper)]"
                  />
                  
                  <div className="relative py-4 flex items-center justify-center gap-3
                                bg-[var(--card-bg)] group-hover/btn:bg-transparent
                                transition-all duration-300">
                    <span className="font-mono text-sm transition">
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </span>
                    <FiSend className={`text-[var(--text-secondary)]
                                      group-hover/btn:translate-x-2 transition-all duration-300
                                      ${isSubmitting ? 'animate-spin' : ''}`} />
                  </div>
                </motion.button>

                {/* Response time with fade animation */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-center text-[var(--text-secondary)] font-mono mt-4"
                >
                  ✦ I typically respond within 24 hours ✦
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;