"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const values = [
  {
    title: "Impact Over Prestige",
    description:
      "I measure success by real-world impact, not awards or accolades. Every project must create tangible value for communities.",
  },
  {
    title: "Community-Centered",
    description:
      "Solutions are built with communities, not for them. Local knowledge and cultural context are essential to sustainable change.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "Climate and energy challenges require patient, sustained effort. I'm committed to solutions that work for decades, not quarters.",
  },
  {
    title: "Open Knowledge",
    description:
      "Innovation accelerates when knowledge is shared. I believe in open research, transparent methods, and accessible education.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="container-custom mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-display md:text-display-lg font-display mb-8 text-balance">
            About Me
          </h1>

          {/* Profile Image Placeholder */}
          <div className="relative bg-neutral-100 rounded-2xl overflow-hidden aspect-video md:aspect-[21/9] mb-12">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              Profile Image
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-neutral-700">
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-900 font-medium">
              I'm Adama Touré, an engineer and educator dedicated to improving
              energy security and climate resilience, particularly in West
              Africa.
            </p>

            <p>
              My journey began with a simple observation: access to reliable
              energy transforms communities. It powers schools, enables
              healthcare, creates economic opportunities, and improves quality
              of life in profound ways. Yet millions of people still lack
              access to reliable electricity, while climate change threatens to
              make their situations even more precarious.
            </p>

            <p>
              This realization became my mission. I've dedicated my career to
              developing solutions that address both challenges simultaneously:
              improving energy security while building climate resilience. My
              work spans smart solar technology, community empowerment,
              sustainable research, and education.
            </p>

            <p>
              Through SEPT, I'm making solar panels smarter and safer. Through
              the N'Ko project, I'm helping West African communities build
              climate resilience using culturally-relevant approaches. Through
              solar thermal research, I'm exploring how to generate both
              electricity and fresh water from the same system. And through
              teaching, I'm empowering others to use AI and technology to solve
              real problems.
            </p>

            <p>
              What drives me is the belief that technology, when designed with
              communities and guided by long-term thinking, can create lasting
              positive change. I'm committed to solutions that are not just
              technically sound, but also culturally appropriate, economically
              viable, and environmentally sustainable.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container-custom section-margin">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-display-sm md:text-display font-display mb-12 text-center">
            My Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 border border-neutral-200 rounded-xl hover:border-accent-600 transition-colors"
              >
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container-custom section-margin">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-display-sm md:text-display font-display mb-12 text-center">
            Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent-600">
                Energy Systems
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Solar energy technology</li>
                <li>Grid optimization</li>
                <li>Energy storage</li>
                <li>Microgrid design</li>
                <li>System integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent-600">
                Technology
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>AI & Machine Learning</li>
                <li>IoT systems</li>
                <li>Data analytics</li>
                <li>Software development</li>
                <li>Hardware integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-accent-600">
                Impact
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>Community engagement</li>
                <li>Climate adaptation</li>
                <li>Education & training</li>
                <li>Project management</li>
                <li>Policy advocacy</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-margin">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-sm md:text-display font-display mb-6">
            Want to Learn More?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Explore my journey or get in touch to discuss collaboration
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/journey"
              className="px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-accent-600 transition-colors"
            >
              View My Journey
            </Link>
            <Link
              href="/connect"
              className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full font-medium hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

