"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "sept",
    title: "SEPT",
    subtitle: "Smart & Safe Solar Panels",
    description:
      "SEPT (Smart Energy Panel Technology) is revolutionizing solar energy by making panels intelligent and safe. Our advanced monitoring systems detect anomalies in real-time, prevent potential fires, and optimize energy production. We're integrating AI-powered diagnostics to predict maintenance needs and extend panel lifespan.",
    features: [
      "Real-time anomaly detection",
      "Fire prevention systems",
      "Predictive maintenance AI",
      "Performance optimization",
    ],
    status: "Active Development",
    year: "2023 - Present",
  },
  {
    id: "nko",
    title: "N'Ko Project",
    subtitle: "Climate Resilience in West Africa",
    description:
      "The N'Ko project empowers West African communities to build climate resilience through culturally-relevant education. We create resources in local languages, combining traditional knowledge with modern climate science. Our approach respects cultural heritage while providing communities with tools to adapt to changing climate conditions.",
    features: [
      "Culturally-relevant climate education",
      "Resources in local languages",
      "Traditional knowledge integration",
      "Community adaptation strategies",
    ],
    status: "Active Deployment",
    year: "2022 - Present",
  },
  {
    id: "solar-thermal",
    title: "Solar Thermal Cogeneration",
    subtitle: "Electricity + Fresh Water",
    description:
      "This research explores solar thermal systems that simultaneously generate electricity and produce fresh water through desalination. By maximizing resource efficiency, this technology addresses two critical challenges: energy security and water scarcity. The cogeneration approach is particularly valuable for arid regions where both resources are desperately needed.",
    features: [
      "Dual-output solar thermal systems",
      "Efficient desalination process",
      "Grid-scale energy generation",
      "Sustainable water production",
    ],
    status: "Research Phase",
    year: "2021 - 2023",
  },
  {
    id: "ai-education",
    title: "AI Education",
    subtitle: "Teaching Fundamentals & Applications",
    description:
      "Making AI accessible through clear, practical education. I teach workshops and courses that demystify machine learning and empower people to build useful AI tools. The focus is on hands-on projects and real-world applications rather than theoretical complexity. Students learn to solve actual problems with AI.",
    features: [
      "Hands-on AI workshops",
      "Practical ML applications",
      "Real-world project focus",
      "Accessible curriculum design",
    ],
    status: "Ongoing",
    year: "2020 - Present",
  },
];

export default function WorkPage() {
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
            My Work
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Four interconnected initiatives addressing energy security, climate
            resilience, and sustainable development.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="container-custom">
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-24"
            >
              <div className="max-w-4xl mx-auto">
                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-sm font-medium uppercase tracking-wider text-accent-600">
                      {project.status}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="text-display-sm md:text-display font-display mb-3">
                    {project.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-neutral-600 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Image Placeholder */}
                <div className="relative bg-neutral-100 rounded-2xl overflow-hidden aspect-video mb-8">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    Project Image
                  </div>
                </div>

                {/* Project Description */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-neutral-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                    >
                      <svg
                        className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="max-w-4xl mx-auto mt-24 md:mt-32 border-t border-neutral-200" />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

