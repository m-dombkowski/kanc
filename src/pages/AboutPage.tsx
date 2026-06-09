import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Scale } from "lucide-react";
import { NavLink } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const values = [
  {
    title: "Rzetelność",
    desc: "Każdą sprawę traktujemy z pełnym zaangażowaniem — niezależnie od jej skali.",
  },
  {
    title: "Dyskrecja",
    desc: "Zachowanie tajemnicy zawodowej i poufności powierzonych informacji to absolutny priorytet.",
  },
  {
    title: "Skuteczność",
    desc: "Nasze działania są ukierunkowane na osiągnięcie najlepszego możliwego rezultatu dla Klienta.",
  },
  {
    title: "Komunikacja",
    desc: "Klient zawsze wie, na jakim etapie jest sprawa. Bez prawniczego żargonu, jasno i na czas.",
  },
];

const credentials = [
  {
    icon: GraduationCap,
    text: "Absolwent Wydziału Prawa i Administracji Uniwersytetu Śląskiego",
  },
  {
    icon: Award,
    text: "Wpis na listę radców prawnych Okręgowej Izby Radców Prawnych w Krakowie",
  },
  {
    icon: Briefcase,
    text: "Wieloletnie doświadczenie w obsłudze prawnej przedsiębiorców i osób prywatnych",
  },
  {
    icon: Scale,
    text: "Specjalizacja w prawie cywilnym, gospodarczym, administracyjnym i medycznym",
  },
];

// delay > PageTransition duration (0.45s) to avoid flash on elements in initial viewport
const PAGE_DELAY = 0.5

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: PAGE_DELAY } },
};
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* PAGE HEADER */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(201,165,90,0.06),transparent_65%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">
                O kancelarii
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif font-light text-5xl lg:text-7xl text-white leading-[0.95] max-w-2xl">
              Doświadczenie{" "}
              <em className="text-gradient not-italic block">
                i zaangażowanie.
              </em>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: PAGE_DELAY }}
                className="font-sans font-light text-white/55 text-[15px] leading-relaxed mb-5">
                Kancelaria świadczy usługi prawne na najwyższym poziomie, łącząc
                dogłębną znajomość prawa z praktycznym doświadczeniem zdobytym w
                toku wieloletniej pracy zawodowej. Reprezentujemy Klientów
                zarówno przed sądami powszechnymi, jak i w postępowaniach
                administracyjnych i arbitrażowych.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: PAGE_DELAY + 0.1 }}
                className="font-sans font-light text-white/55 text-[15px] leading-relaxed">
                Stawiamy na długofalowe relacje oparte na zaufaniu i
                przejrzystości. Każdy Klient otrzymuje jasną informację o stanie
                sprawy, realnych możliwościach i potencjalnych ryzykach.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: PAGE_DELAY + i * 0.1 }}
                  className="glass p-6 hover:border-gold-500/25 transition-all duration-300">
                  <h3 className="font-serif text-lg text-gold-400 mb-2">
                    {v.title}
                  </h3>
                  <p className="font-sans text-[13px] text-white/50 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
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
              Zespół
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-stretch">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 flex"
            >
              <div className="relative max-w-[280px] w-full flex flex-col">
                <div className="absolute -top-3 -left-3 w-full h-full border border-gold-500/20" />
                <div className="relative bg-navy-800 overflow-hidden flex-1 min-h-[320px]">
                  <img
                    src="/Jacek.jpeg"
                    alt="r.pr. Jacek Dombkowski"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: 'contrast(1.05) brightness(0.97)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-serif text-xl text-white mb-0.5">Jacek Dombkowski</p>
                    <p className="font-sans text-[10px] tracking-[0.2em] text-gold-400 uppercase">Radca Prawny</p>
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
                r.pr. Jacek Dombkowski
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ transformOrigin: "left" }}
                className="w-16 h-px bg-gold-500 mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans font-light text-white/55 text-[15px] leading-relaxed mb-5">
                Radca prawny z wieloletnim stażem zawodowym. Specjalizuje się w
                prawie cywilnym, gospodarczym, administracyjnym, prawie zamówień
                publicznych oraz prawie medycznym, świadcząc usługi zarówno dla
                przedsiębiorców, jak i osób fizycznych.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="font-sans font-light text-white/55 text-[15px] leading-relaxed mb-10">
                Reprezentuje Klientów w postępowaniach sądowych, prowadzi
                negocjacje, sporządza umowy oraz opinie prawne. Szczególną wagę
                przywiązuje do indywidualnego traktowania każdej sprawy i
                regularnego kontaktu z Klientem na każdym etapie postępowania.
              </motion.p>

              <div className="flex flex-col gap-4">
                {credentials.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.32 + i * 0.09 }}
                    className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center">
                      <c.icon size={13} className="text-gold-500" />
                    </div>
                    <p className="font-sans text-[13px] text-white/50 leading-relaxed">
                      {c.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10">
                <NavLink
                  to="/kontakt"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300">
                  Skontaktuj się
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
