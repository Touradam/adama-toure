import Timeline from "@/components/Timeline";
import timelineData from "@/data/timeline.json";

export const metadata = {
  title: "Journey - Adama Touré",
  description: "Follow my journey through energy security and climate resilience. An interactive timeline of key chapters and milestones.",
};

export default function JourneyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="container-custom mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display md:text-display-lg font-display mb-6 text-balance">
            A Journey Through Time
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            From discovering my purpose to building solutions for energy
            security and climate resilience. Scroll to explore the chapters that
            shaped this mission.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container-custom">
        <Timeline entries={timelineData} />
      </section>
    </div>
  );
}

