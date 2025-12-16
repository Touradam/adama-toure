import Link from "next/link";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "GitHub", href: "#", icon: "github" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Email", href: "mailto:contact@example.com", icon: "email" },
];

const footerLinks = [
  { name: "Journey", href: "/journey" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Connect", href: "/connect" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              Adama Touré
            </h3>
            <p className="text-neutral-600 max-w-md mb-6">
              Improving energy security and climate resilience through smart
              solar technology, community empowerment, and sustainable
              innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-600 hover:text-accent-600 transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:items-end">
            <div className="flex flex-col gap-3 mb-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>&copy; {currentYear} Adama Touré. All rights reserved.</p>
          <p>Designed & built with purpose</p>
        </div>
      </div>
    </footer>
  );
}

