"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface TimelineCardProps {
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
  index: number;
}

export default function TimelineCard({
  year,
  dateRange,
  title,
  category,
  description,
  images,
  cta,
  index,
}: TimelineCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-600 border-4 border-white shadow-lg z-10" />

      {/* Card Container */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ${
          isEven ? "" : "md:grid-flow-dense"
        }`}
      >
        {/* Content Side */}
        <div className={`${isEven ? "md:text-right" : "md:col-start-2"}`}>
          <div className="inline-block mb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-accent-600">
              {category}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2 text-balance">
            {title}
          </h3>

          <p className="text-sm text-neutral-500 mb-4">{dateRange}</p>

          <p className="text-neutral-600 leading-relaxed mb-6">{description}</p>

          <Link
            href={cta.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-accent-600 transition-colors group"
          >
            {cta.label}
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
          </Link>
        </div>

        {/* Images Side */}
        <div
          className={`${
            isEven ? "md:col-start-2" : ""
          } grid gap-4 ${images.length > 1 ? "grid-cols-2" : ""}`}
        >
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={`relative bg-neutral-100 rounded-lg overflow-hidden ${
                images.length === 1 ? "aspect-[4/3]" : "aspect-square"
              } ${idx === 0 && images.length === 3 ? "col-span-2" : ""}`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
                Image {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

