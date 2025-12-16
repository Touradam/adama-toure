"use client";

import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

interface TimelineEntry {
  id: string;
  year: string;
  dateRange: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  cta: {
    label: string;
    link: string;
  };
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 hidden md:block" />

      {/* Timeline Entries */}
      <div className="space-y-24 md:space-y-32">
        {entries.map((entry, index) => (
          <div key={entry.id} className="relative">
            {/* Year Marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="absolute left-1/2 -translate-x-1/2 -top-12 md:-top-16"
            >
              <div className="bg-white px-6 py-2 rounded-full border border-neutral-200 shadow-sm">
                <span className="text-xl md:text-2xl font-display font-semibold">
                  {entry.year}
                </span>
              </div>
            </motion.div>

            <TimelineCard {...entry} index={index} />
          </div>
        ))}
      </div>

      {/* End Marker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mt-24 flex justify-center"
      >
        <div className="w-3 h-3 rounded-full bg-neutral-300" />
      </motion.div>
    </div>
  );
}

