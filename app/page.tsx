"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import timelineData from "@/data/timeline.json";

const pillars = [
  {
    number: "01",
    title: "SEPT",
    subtitle: "Smart & Safe Solar Panels",
    description:
      "Making solar panels intelligent and safe through advanced monitoring and anomaly detection systems.",
    link: "/work#sept",
  },
  {
    number: "02",
    title: "N'Ko",
    subtitle: "Climate Resilience in West Africa",
    description:
      "Empowering West African communities to build climate resilience through education and cultural preservation.",
    link: "/work#nko",
  },
  {
    number: "03",
    title: "Solar Thermal",
    subtitle: "Cogeneration Research",
    description:
      "Pioneering solar thermal systems for simultaneous electricity generation and fresh water production.",
    link: "/work#solar-thermal",
  },
  {
    number: "04",
    title: "AI Education",
    subtitle: "Teaching Fundamentals",
    description:
      "Demystifying AI and empowering people to build practical, useful tools that solve real problems.",
    link: "/work#ai-education",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const featuredTimeline = timelineData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display md:text-display-lg font-display mb-6 md:mb-8 text-balance"
          >
            Improving Energy Security & Climate Resilience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Through smart solar technology, community empowerment, and
            sustainable innovation, I work to create a more resilient future for
            all.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/journey"
              className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              Explore My Journey
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full font-medium hover:bg-neutral-900 hover:text-white transition-colors"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Four Pillars Section */}
      <section className="section-margin container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-display-sm md:text-display font-display mb-4">
            Four Pillars of Impact
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            My mission is built on four interconnected areas of work, each
            contributing to a more sustainable and equitable future.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={itemVariants}
              className="group"
            >
              <Link href={pillar.link} className="block">
                <div className="border border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-accent-600 hover:shadow-lg transition-all duration-300">
                  <span className="text-6xl md:text-7xl font-display font-bold text-neutral-100 group-hover:text-accent-100 transition-colors">
                    {pillar.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold mt-4 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-accent-600 font-medium mb-4 uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-accent-600 transition-colors">
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Timeline Preview */}
      <section className="section-margin container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-display-sm md:text-display font-display mb-4">
            The Journey So Far
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A glimpse into the key chapters that have shaped my mission.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {featuredTimeline.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="border-l-2 border-neutral-200 pl-6 md:pl-8"
            >
              <span className="text-sm text-accent-600 font-medium uppercase tracking-wider">
                {entry.category}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-semibold mt-2 mb-1">
                {entry.title}
              </h3>
              <p className="text-sm text-neutral-500 mb-3">{entry.dateRange}</p>
              <p className="text-neutral-600 leading-relaxed line-clamp-3">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full font-medium hover:bg-neutral-900 hover:text-white transition-colors"
          >
            View Full Timeline
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-margin container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-neutral-900 rounded-3xl p-12 md:p-16 text-center text-white"
        >
          <h2 className="text-display-sm md:text-display font-display mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Interested in collaboration, speaking engagements, or just want to
            chat about energy security and climate resilience?
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-accent-600 hover:text-white transition-colors"
          >
            Get in Touch
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

