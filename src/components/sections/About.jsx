import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiArrowDown, FiCoffee, FiCode, FiHeart, FiCpu, FiZap } from 'react-icons/fi';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const aboutLines = [
    "I'm a developer who enjoys building clean, thoughtful digital experiences.",
    "I like understanding how things work—breaking problems down, exploring different approaches, and rebuilding them into solutions that feel simple and intuitive. For me, development isn't just about writing code; it's about clarity, logic, and creating something that makes sense to the people using it.",
    "I'm particularly drawn to crafting applications that are smooth, reliable, and easy to interact with. I believe good software should feel almost effortless—designed with intention, built with care, and refined through constant learning.",
    "Still exploring, still improving, and always looking for better ways to build."
  ];

  const exploringTopics = [
    { icon: FiCpu, label: "AI Integration", color: "var(--accent-gold)" },
    { icon: FiZap, label: "Performance Optimization", color: "var(--accent-copper)" },
    { icon: FiCode, label: "Developer Tools", color: "var(--accent-silver)" },
    { icon: FiHeart, label: "UX Design", color: "var(--accent-gold)" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--accent-gold)]/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[var(--accent-copper)]/5 blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              / about me
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
              Behind the Code
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Personal Quote + Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative"
          >
            <div className="sticky top-32 space-y-6">
              {/* Quote Card */}
              <div className="relative group">
                <div className="absolute inset-0 border-2 translate-x-2 translate-y-2 rounded-2xl -z-10"
                     style={{ borderColor: 'var(--accent-gold)' }} />
                <div className="absolute inset-0 border-2 translate-x-1 translate-y-1 rounded-2xl -z-5"
                     style={{ borderColor: 'var(--accent-copper)', opacity: 0.4 }} />
                
                <div className="relative bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-2xl p-8">
                  {/* Quote icon */}
                  <span className="text-4xl font-serif text-[var(--accent-gold)] opacity-30 absolute top-4 left-4">
                    "
                  </span>
                  
                  <div className="relative z-10">
                    <p className="text-xl font-display font-medium italic leading-relaxed mb-6 text-[var(--text-primary)]">
                      Building with intention, one line of code at a time.
                    </p>
                    
                    <div className="flex items-center gap-3 text-sm font-mono">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
                      <span className="text-[var(--text-secondary)]">Shraddha Gupta</span>
                    </div>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-gold)] opacity-30" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-gold)] opacity-30" />
                </div>
              </div>

              {/* Currently Exploring - Creative Terminal Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                {/* Terminal header */}
                <div className="bg-[var(--border)]/10 px-4 py-2 rounded-t-lg border border-[var(--border)] border-b-0">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono text-xs text-[var(--text-secondary)] ml-2">
                      ~/exploring.sh
                    </span>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-b-lg p-6">
                  <div className="font-mono text-sm space-y-4">
                    <div className="flex items-center gap-2 text-[var(--accent-gold)]">
                      <span>$</span>
                      <span>cat current_focus.txt</span>
                    </div>
                    
                    <div className="pl-4 space-y-3">
                      {exploringTopics.map((topic, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center gap-3 group/item"
                        >
                          <topic.icon className="w-4 h-4" style={{ color: topic.color }} />
                          <span className="text-[var(--text-primary)]">{topic.label}</span>
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-[var(--accent-gold)] text-xs ml-auto"
                          >
                            ●
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[var(--text-secondary)] mt-4 pt-2 border-t border-[var(--border)]/30">
                      <span className="text-[var(--accent-gold)]">❯</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 30px var(--accent-gold)' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Story (8 columns) */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-8 space-y-6"
          >
            {aboutLines.map((line, index) => (
              <motion.p
                key={index}
                variants={lineVariants}
                className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed"
              >
                {line}
              </motion.p>
            ))}

            {/* Signature line with hover effect */}
            <motion.div
              variants={lineVariants}
              className="pt-8 flex items-center gap-4 group cursor-default"
            >
              <div className="h-px w-16 bg-gradient-to-r from-[var(--accent-gold)] to-transparent 
                            group-hover:w-24 transition-all duration-500" />
              <span className="font-mono text-sm text-[var(--accent-gold)] tracking-wider
                             group-hover:tracking-[0.2em] transition-all duration-500">
                build with intention
              </span>
            </motion.div>

            {/* A little personal note */}
            <motion.div
              variants={lineVariants}
              className="mt-8 relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-gold)] to-transparent" />
              <p className="text-sm font-mono text-[var(--text-secondary)] pl-6 italic">
                When I’m not coding, I’m usually thinking about how things could be built better—questioning, refining, and learning along the way.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mt-20"
        />
      </div>
    </section>
  );
};

export default About;