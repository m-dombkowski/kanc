import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Linkedin, ArrowRight } from "lucide-react";
import { useLang } from "../contexts/LanguageContext";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const { T } = useLang();
  const F = T.footer;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/.netlify/functions/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || F.newsletterError);
        setStatus("error");
      }
    } catch {
      setError(F.newsletterError);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="font-sans text-[12px] text-gold-400 leading-relaxed">
        {F.newsletterSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={F.newsletterPlaceholder}
          className="flex-1 min-w-0 bg-white/5 border border-white/10 border-r-0 px-3 py-2.5 text-[12px] text-white placeholder-white/25 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label={F.newsletterAriaLabel}
          className="px-3.5 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 transition-colors duration-300 disabled:opacity-50">
          <ArrowRight size={14} />
        </button>
      </div>
      {status === "error" && (
        <p className="font-sans text-[11px] text-red-400/80">{error}</p>
      )}
      <p className="font-sans text-[10px] text-white/20 leading-relaxed">
        {F.newsletterConsent}
      </p>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { T } = useLang();
  const F = T.footer;

  const practiceShort = T.practiceShort;

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <p className="font-serif text-lg text-gold-400 tracking-widest2 mb-1">
              KANCELARIA
            </p>
            <p className="font-sans text-[10px] tracking-[0.3em] text-white/30 uppercase mb-5">
              {T.nav.subtitle}
            </p>
            <p className="font-sans text-[12px] text-white/35 leading-relaxed">
              {F.tagline}
            </p>
            <a
              href="https://www.linkedin.com/in/jacek-dombkowski/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/30 hover:text-gold-400 transition-colors">
              <Linkedin size={15} />
              <span className="font-sans text-[11px] tracking-wide">
                LinkedIn
              </span>
            </a>

            <div id="newsletter" className="mt-8">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-3">
                {F.newsletterLabel}
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">
              {F.sectionPractice}
            </p>
            <ul className="space-y-3">
              {practiceShort.map((l) => (
                <li key={l}>
                  <NavLink
                    to="/praktyka"
                    className="font-sans text-[12px] text-white/35 hover:text-gold-400 transition-colors">
                    {l}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">
              {F.sectionFirm}
            </p>
            <ul className="space-y-3">
              {F.firmLinks.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    className="font-sans text-[12px] text-white/35 hover:text-gold-400 transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">
              {F.sectionDocs}
            </p>
            <ul className="space-y-3">
              {F.docsLinks.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    className="font-sans text-[12px] text-white/35 hover:text-gold-400 transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-white/20">
            {F.copyright(year)}
          </p>
          <p className="font-sans text-[11px] text-white/15">{F.oirp}</p>
        </div>
      </div>
    </footer>
  );
}
