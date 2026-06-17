import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useLang } from "../contexts/LanguageContext";

const credentialIcons = [GraduationCap, Briefcase, Award]

const PAGE_DELAY = 0.1;

export default function AboutPage() {
  const { T } = useLang()
  const { values, credentials } = T.about

  return (
    <PageTransition>
      {/* PAGE HEADER */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(201,165,90,0.06),transparent_65%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="anim-fade-in-up flex items-center gap-4 mb-6"
            style={{ animationDelay: `${PAGE_DELAY}s` }}>
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">
              {T.about.badge}
            </span>
          </div>
          <h1
            className="anim-fade-in-up font-serif font-light text-5xl lg:text-7xl text-white leading-[0.95] max-w-2xl"
            style={{ animationDelay: `${PAGE_DELAY + 0.1}s` }}>
            {T.about.h1a}{" "}
            <em className="text-gradient not-italic block">{T.about.h1b}</em>
          </h1>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p
                className="anim-fade-in-up font-sans font-light text-white/55 text-[15px] leading-relaxed mb-5"
                style={{ animationDelay: `${PAGE_DELAY}s` }}>
                {T.about.desc1}
              </p>
              <p
                className="anim-fade-in-up font-sans font-light text-white/55 text-[15px] leading-relaxed"
                style={{ animationDelay: `${PAGE_DELAY + 0.1}s` }}>
                {T.about.desc2}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="anim-fade-in-up glass p-6 hover:border-gold-500/25 transition-colors duration-300"
                  style={{ animationDelay: `${PAGE_DELAY + i * 0.1}s` }}>
                  <h3 className="font-serif text-lg text-gold-400 mb-2">
                    {v.title}
                  </h3>
                  <p className="font-sans text-[13px] text-white/50 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="relative py-20 lg:py-28 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(201,165,90,0.04),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">
              {T.about.teamBadge}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-stretch">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 flex">
              <div className="relative max-w-[450px] w-full flex flex-col">
                <div className="absolute -top-3 -left-3 w-full h-full border border-gold-500/20" />
                <div className="relative bg-navy-800 overflow-hidden flex-1 min-h-[320px]">
                  <img
                    src="/Jacek.jpeg"
                    alt="Jacek Dombkowski"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "contrast(1.05) brightness(0.97)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-serif text-xl text-white mb-0.5">
                      {T.about.teamName}
                    </p>
                    <p className="font-sans text-[10px] tracking-[0.2em] text-gold-400 uppercase">
                      {T.about.teamRole}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif font-light text-4xl lg:text-5xl text-white leading-[1.1] mb-5">
                {T.about.teamName}
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ transformOrigin: "left" }}
                className="w-16 h-px bg-gold-500 mb-8"
              />

              {[T.about.bio1, T.about.bio2, T.about.bio3, T.about.bio4].map((bio, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.06 }}
                  className={`font-sans font-light text-white/55 text-[15px] leading-relaxed ${i < 3 ? 'mb-5' : 'mb-10'}`}>
                  {bio}
                </motion.p>
              ))}

              <div className="flex flex-col gap-4">
                {credentials.map((text, i) => {
                  const Icon = credentialIcons[i]
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.32 + i * 0.09 }}
                      className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center">
                        <Icon size={13} className="text-gold-500" />
                      </div>
                      <p className="font-sans text-[13px] text-white/50 leading-relaxed">
                        {text}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10">
                <NavLink
                  to="/kontakt"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 active:scale-[0.97] transition-[transform,background-color] duration-150">
                  {T.about.contactCta}
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
