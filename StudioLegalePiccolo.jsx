import React, { useState, useEffect, useRef } from "react";

const IMGS = {
  eugenio: "https://www.avvocatoeugeniopiccolo.it/images/eugenio_piccolo_5.jpg",
  stefania: "https://www.avvocatoeugeniopiccolo.it/images/stefania_piccolo.jpg",
  sveva: "https://www.avvocatoeugeniopiccolo.it/images/sveva_benedetta_donadi.png",
  francesca: "https://www.avvocatoeugeniopiccolo.it/images/francesca_piccolo.png",
  hero: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=2000&q=80",
  lawyer: "https://media.base44.com/images/public/69b5b0eab92e9c9ccc04c0e9/26ce5c6b9_generated_image.png",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
};

const T = {
  bg: "#faf9f6", bgAlt: "#ffffff", bgSection: "#f4f2ee",
  primary: "#111c3a", gold: "#c6a87c", goldDark: "#a8895e",
  text: "#2c3340", textMid: "#4a5568", textLight: "#7a8a9a",
  border: "rgba(17,28,58,0.09)", borderGold: "rgba(198,168,124,0.3)",
  shadow: "0 8px 40px rgba(17,28,58,0.07)", shadowHover: "0 16px 60px rgba(17,28,58,0.13)",
};

const TEAM = [
  { name: "Avv. Eugenio Piccolo", role: "Titolare e Fondatore", img: IMGS.eugenio, since: "Dal 1986",
    tags: ["Cassazionista", "Diritto Civile", "Diritto Penale", "Diritto Minorile"],
    bio: "Nato a Varese il 28 febbraio 1957, laureato in Giurisprudenza nel 1982 all'Università Cattolica del Sacro Cuore di Milano. Iscritto all'Albo degli Avvocati di Varese dal 1986 e all'Albo dei Patrocinanti in Cassazione dal 1998. Dal 2018 al 2020 Consulente Giuridico del Senatore Gianluigi Paragone. Partner di MepLaw International Firm dal 2023 e membro della Camera Arbitrale Internazionale dal 2020.",
    highlights: ["Partner MepLaw International 2023", "Patrocinante in Cassazione dal 1998", "Camera Arbitrale Internazionale 2020", "CONI Lombardia — Commissione Legale 2024"] },
  { name: "Avv. Stefania Piccolo", role: "Avvocato Collaboratore", img: IMGS.stefania, since: "Dal 1994",
    tags: ["Diritto di Famiglia", "Infortunistica", "Responsabilità Professionale"],
    bio: "Laureata in Giurisprudenza nel 1990 all'Università degli Studi di Milano, Procuratore legale dal 1993, iscritta all'Albo di Varese dal 1994. Specializzata in infortunistica stradale, responsabilità professionale, diritto di famiglia e diritto fallimentare.",
    highlights: ["Procuratore legale dal 1993", "Specializzazione diritto di famiglia", "Infortunistica e risarcimento danni", "Esecuzioni mobiliari e immobiliari"] },
  { name: "Avv. Sveva Donadi", role: "Avvocato Collaboratore", img: IMGS.sveva, since: "Dal 2014",
    tags: ["Diritto Civile", "Patrocinio a Spese dello Stato"],
    bio: "Laureata in Giurisprudenza nel 2012 a Milano, iscritta all'Albo di Varese dal 2014. Iscritta alle liste del patrocinio a spese dello Stato.",
    highlights: ["Iscritta Albo Varese dal 2014", "Patrocinio a spese dello Stato", "Diritto civile e procedure"] },
  { name: "Avv. Francesca Piccolo", role: "Avvocato Collaboratore", img: IMGS.francesca, since: "Dal 2022",
    tags: ["Diritto Civile", "Ricerca Giuridica"],
    bio: "Laureata nel 2016 all'Università dell'Insubria di Varese. Scuola di Specializzazione per le Professioni Legali a Milano. Corso magistratura ordinaria alla Cattolica nel 2020. Avvocato dal gennaio 2022.",
    highlights: ["Scuola Specializzazione Professioni Legali", "Corso magistratura ordinaria 2020", "Avvocato dal gennaio 2022"] },
];

const TIMELINE = [
  { year: "1982", label: "Laurea in Giurisprudenza", desc: "Università Cattolica del Sacro Cuore di Milano" },
  { year: "1986", label: "Fondazione dello Studio", desc: "Iscrizione all'Albo degli Avvocati di Varese" },
  { year: "1994", label: "Il team si allarga", desc: "Ingresso dell'Avv. Stefania Piccolo" },
  { year: "1998", label: "Cassazionista", desc: "Iscrizione all'Albo dei Patrocinanti in Cassazione" },
  { year: "2020", label: "Arbitrato Internazionale", desc: "Membro Camera Arbitrale Internazionale" },
  { year: "2023", label: "Partner MepLaw", desc: "Partnership con MepLaw International Firm" },
  { year: "2024", label: "CONI Lombardia", desc: "Componente della Commissione Legale" },
];

const SERVICES = [
  { icon: "✒️", title: "Consulenza e Contrattualistica", desc: "Pareri legali, elaborazione contratti e partecipazione a negoziazioni con attenzione alle specificità di ogni situazione." },
  { icon: "💶", title: "Recupero Crediti & L. 3/2012", desc: "Tutela del creditore e del debitore. Procedure esecutive, ristrutturazione del debito e sovraindebitamento." },
  { icon: "👨‍👩‍👧", title: "Diritto di Famiglia", desc: "Separazioni, divorzi e affidamento minori. Collaborazione con psicologi per la migliore tutela dei diritti genitoriali." },
  { icon: "🩺", title: "Responsabilità Sanitaria", desc: "Malpractice medica con confronto anticipato con specialisti. Tutela pazienti e sanitari." },
  { icon: "🏢", title: "Area Societaria e Fallimentare", desc: "Assistenza aziende, rapporti tra soci, procedure fallimentari, concordati e ristrutturazione d'impresa." },
  { icon: "🛡️", title: "Tutela della Persona", desc: "Protezione delle persone fragili tramite amministrazione di sostegno, interdizione e inabilitazione." },
  { icon: "⚖️", title: "Diritto Penale", desc: "Reati contro la persona, famiglia e patrimonio. Specializzazione in diritto penale minorile." },
  { icon: "🤝", title: "Trattazione Stragiudiziale", desc: "Risoluzione stragiudiziale per evitare lungaggini processuali, nel rispetto delle aspettative del cliente." },
];

const COLLABS = [
  { icon: "🌍", name: "MEPLAW International Law Firm", desc: "Partner dal 2023 — Roma ed Europa." },
  { icon: "🏛️", name: "Camera Arbitrale Internazionale", desc: "Membro attivo dal 2020." },
  { icon: "📈", name: "LG & Partners Srl", desc: "Industria 4.0 e trasformazione d'impresa." },
  { icon: "🏅", name: "AEREC", desc: "Membro dal 2022 — relazioni economiche e culturali europee." },
  { icon: "⚽", name: "CONI Lombardia", desc: "Commissione Legale dal luglio 2024." },
  { icon: "🤝", name: "Confesercenti & Asso-Consum", desc: "Consulente legale dal 2021 e 2023." },
];

const STATS = [
  { value: "4", label: "Avvocati" },
  { value: "1986", label: "Fondazione" },
  { value: "38+", label: "Anni esperienza" },
  { value: "8", label: "Aree di pratica" },
];

const INITIAL_MSG = { role: "assistant", text: "Benvenuto nello Studio Legale Avv. Eugenio Piccolo.\n\nSono l'assistente virtuale dello studio. Posso aiutarla a conoscere i nostri servizi, le competenze del team o prenotare un appuntamento a Varese.\n\nCome posso esserle utile?" };

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, dir = "up", style = {} }) {
  const [ref, visible] = useInView();
  const t = { up: "translateY(24px)", left: "translateX(-28px)", right: "translateX(28px)" };
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : (t[dir] || t.up), transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

export default function StudioLegalePiccolo() {
  const [messages, setMessages] = useState([INITIAL_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);
  const [expandedService, setExpandedService] = useState(null);
  const messagesEndRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://muhammad-cc04c0e9.base44.app/functions/chatbot", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, history: messages }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.reply || "Errore nell'elaborazione." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", text: "Problema di connessione. La invitiamo a chiamarci al +39 0332 283553." }]);
    }
    setLoading(false);
  };

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const navLinks = [["Lo Studio", "studio"], ["Aree di Pratica", "servizi"], ["Professionisti", "team"], ["Partnership", "partnership"], ["Contatti", "contatti"]];

  const px = isMobile ? "20px" : "clamp(24px, 6vw, 80px)";

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: T.bg, color: T.text, overflowX: "hidden", lineHeight: 1.65 }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 300,
        height: 68,
        background: scrolled || menuOpen ? "rgba(250,249,246,0.98)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(17,28,58,0.08)" : "none",
        transition: "all 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `0 ${px}`,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span style={{ fontSize: isMobile ? 10 : 12, fontWeight: 700, letterSpacing: 1.5, color: scrolled || menuOpen ? T.primary : "#fff", textTransform: "uppercase", transition: "color 0.3s" }}>Studio Legale</span>
          <span style={{ fontSize: isMobile ? 14 : 16, fontWeight: 300, color: scrolled || menuOpen ? T.primary : "#fff", transition: "color 0.3s" }}>Avv. Eugenio Piccolo</span>
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {navLinks.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 12, letterSpacing: 0.8, fontWeight: 500,
                color: scrolled ? T.textMid : "rgba(255,255,255,0.85)",
                textTransform: "uppercase", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = T.gold}
                onMouseLeave={e => e.target.style.color = scrolled ? T.textMid : "rgba(255,255,255,0.85)"}
              >{label}</button>
            ))}
            <button onClick={() => scrollTo("contatti")} style={{
              background: T.gold, color: "#fff", border: "none",
              padding: "9px 20px", borderRadius: 2, fontSize: 11, fontWeight: 600,
              letterSpacing: 1, textTransform: "uppercase", cursor: "pointer",
            }}>Contattaci</button>
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "none", border: "none", cursor: "pointer", padding: 8,
            display: "flex", flexDirection: "column", gap: 5,
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 24, height: 2,
                background: scrolled || menuOpen ? T.primary : "#fff",
                transition: "all 0.3s",
                transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 290,
          background: "rgba(250,249,246,0.98)", backdropFilter: "blur(20px)",
          padding: "16px 20px 24px",
          boxShadow: "0 8px 32px rgba(17,28,58,0.12)",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "14px 0", fontSize: 15, fontWeight: 500, color: T.primary,
              textAlign: "left", borderBottom: `1px solid ${T.border}`,
              letterSpacing: 0.3,
            }}>{label}</button>
          ))}
          <button onClick={() => scrollTo("contatti")} style={{
            background: T.gold, color: "#fff", border: "none",
            padding: "14px", borderRadius: 2, fontSize: 13, fontWeight: 600,
            cursor: "pointer", marginTop: 12, letterSpacing: 0.5,
          }}>Prenota una consulenza</button>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100svh", minHeight: 600, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.hero})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,28,58,0.25) 0%, rgba(17,28,58,0.65) 100%)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "0 24px", maxWidth: 820, width: "100%" }}>
          <FadeIn delay={0.2}>
            <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 16 }}>Varese · Dal 1986</p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <h1 style={{ fontSize: isMobile ? "clamp(30px,8vw,44px)" : "clamp(38px,5vw,68px)", fontWeight: 300, color: "#fff", lineHeight: 1.15, marginBottom: 20, letterSpacing: -0.5 }}>
              Studio Legale<br /><strong style={{ fontWeight: 700 }}>Avv. Eugenio Piccolo</strong>
            </h1>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p style={{ fontSize: isMobile ? 15 : 17, color: "rgba(255,255,255,0.72)", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.8 }}>
              Competenza, riservatezza e attenzione personale al cliente dal 1986.
            </p>
          </FadeIn>
          <FadeIn delay={0.65}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("contatti")} style={{
                background: T.gold, color: "#fff", border: "none",
                padding: isMobile ? "14px 28px" : "15px 34px", borderRadius: 2,
                fontSize: isMobile ? 12 : 13, fontWeight: 600, letterSpacing: 1.1,
                textTransform: "uppercase", cursor: "pointer",
              }}>Prenota una consulenza</button>
              <button onClick={() => scrollTo("studio")} style={{
                background: "transparent", color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: isMobile ? "14px 28px" : "15px 34px", borderRadius: 2,
                fontSize: isMobile ? 12 : 13, fontWeight: 500, letterSpacing: 1.1,
                textTransform: "uppercase", cursor: "pointer",
              }}>Scopri lo studio</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ background: T.primary, padding: `28px ${px}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`, gap: 0 }}>
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                textAlign: "center", padding: "10px 16px",
                borderRight: (!isMobile && i < 3) || (isMobile && i % 2 === 0) ? "1px solid rgba(255,255,255,0.1)" : "none",
                borderBottom: isMobile && i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}>
                <div style={{ fontSize: isMobile ? 26 : 34, fontWeight: 700, color: T.gold, letterSpacing: -1 }}>{s.value}</div>
                <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── LO STUDIO ── */}
      <section id="studio" style={{ padding: `80px ${px}`, background: T.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "center" }}>
            <FadeIn dir={isMobile ? "up" : "left"}>
              <div>
                <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 14 }}>Lo Studio</p>
                <h2 style={{ fontSize: isMobile ? "clamp(24px,6vw,36px)" : "clamp(28px,3.5vw,44px)", fontWeight: 300, color: T.primary, lineHeight: 1.2, marginBottom: 20 }}>
                  Quasi quarant'anni<br /><strong style={{ fontWeight: 700 }}>di eccellenza legale</strong>
                </h2>
                <div style={{ width: 44, height: 2, background: T.gold, marginBottom: 24 }} />
                <p style={{ color: T.textMid, lineHeight: 1.85, marginBottom: 18, fontSize: 15 }}>
                  Sin dalla fondazione nel 1986, lo Studio si ispira ai principi di <strong>correttezza, riservatezza e attenzione puntuale</strong> nei confronti del cliente.
                </p>
                <p style={{ color: T.textMid, lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                  Ogni rapporto professionale è gestito personalmente dall'Avv. Piccolo, che valuta la situazione e assegna gli aspetti specifici al collaboratore più esperto.
                </p>
                <button onClick={() => scrollTo("team")} style={{
                  background: "none", border: `1px solid ${T.gold}`, color: T.gold,
                  padding: "11px 24px", borderRadius: 2, fontSize: 12, fontWeight: 600,
                  letterSpacing: 1, textTransform: "uppercase", cursor: "pointer",
                }}>Conosci il team →</button>
              </div>
            </FadeIn>
            <FadeIn dir={isMobile ? "up" : "right"} delay={0.15}>
              <div style={{ position: "relative" }}>
                <img src={IMGS.lawyer} alt="Studio" style={{
                  width: "100%", height: isMobile ? 300 : 460, objectFit: "cover", borderRadius: 2,
                  boxShadow: "12px 12px 0 " + T.gold + "20",
                }} />
                <div style={{
                  position: "absolute", bottom: isMobile ? -16 : -20, left: isMobile ? -12 : -20,
                  background: T.primary, color: "#fff",
                  padding: isMobile ? "14px 20px" : "18px 26px", borderRadius: 2, boxShadow: T.shadow,
                }}>
                  <div style={{ fontSize: isMobile ? 24 : 30, fontWeight: 700, color: T.gold }}>38+</div>
                  <div style={{ fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: 3 }}>anni di esperienza</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding: `80px ${px}`, background: T.bgSection }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 12 }}>Storia</p>
              <h2 style={{ fontSize: isMobile ? "clamp(22px,5vw,32px)" : "clamp(26px,3vw,40px)", fontWeight: 300, color: T.primary }}>I nostri <strong style={{ fontWeight: 700 }}>traguardi</strong></h2>
              <div style={{ width: 36, height: 2, background: T.gold, margin: "16px auto 0" }} />
            </div>
          </FadeIn>

          {isMobile ? (
            /* Mobile timeline: vertical single column */
            <div style={{ position: "relative", paddingLeft: 36 }}>
              <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 1, background: T.borderGold }} />
              {TIMELINE.map((item, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div style={{ position: "relative", marginBottom: 36 }}>
                    <div style={{
                      position: "absolute", left: -32, top: 4,
                      width: 12, height: 12, borderRadius: "50%",
                      background: T.gold, border: `2px solid ${T.bgSection}`,
                      boxShadow: `0 0 0 2px ${T.gold}`,
                    }} />
                    <div style={{ background: T.bgAlt, border: `1px solid ${T.border}`, borderRadius: 2, padding: "16px 18px", boxShadow: T.shadow }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: T.gold, marginBottom: 4 }}>{item.year}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: T.primary, marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 12.5, color: T.textLight, lineHeight: 1.55 }}>{item.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            /* Desktop timeline: alternating */
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: T.borderGold, transform: "translateX(-50%)" }} />
              {TIMELINE.map((item, i) => (
                <FadeIn key={i} delay={i * 0.07} dir={i % 2 === 0 ? "left" : "right"}>
                  <div style={{ display: "flex", flexDirection: i % 2 === 0 ? "row" : "row-reverse", alignItems: "center", marginBottom: 44, position: "relative" }}>
                    <div style={{ flex: 1, padding: i % 2 === 0 ? "0 52px 0 0" : "0 0 0 52px", textAlign: i % 2 === 0 ? "right" : "left" }}>
                      <div style={{ background: T.bgAlt, border: `1px solid ${T.border}`, padding: "20px 24px", borderRadius: 2, boxShadow: T.shadow, display: "inline-block", maxWidth: 340 }}
                        onMouseEnter={e => e.currentTarget.style.boxShadow = T.shadowHover}
                        onMouseLeave={e => e.currentTarget.style.boxShadow = T.shadow}>
                        <div style={{ fontSize: 22, fontWeight: 700, color: T.gold, marginBottom: 6 }}>{item.year}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: T.primary, marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 13, color: T.textLight, lineHeight: 1.55 }}>{item.desc}</div>
                      </div>
                    </div>
                    <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: 14, height: 14, borderRadius: "50%", background: T.gold, border: `3px solid ${T.bgSection}`, boxShadow: `0 0 0 2px ${T.gold}`, zIndex: 2 }} />
                    <div style={{ flex: 1 }} />
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section id="servizi" style={{ padding: `80px ${px}`, background: T.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 12 }}>Aree di Pratica</p>
              <h2 style={{ fontSize: isMobile ? "clamp(22px,5vw,32px)" : "clamp(26px,3vw,40px)", fontWeight: 300, color: T.primary }}>Cosa <strong style={{ fontWeight: 700 }}>facciamo</strong></h2>
              <div style={{ width: 36, height: 2, background: T.gold, margin: "16px auto 0" }} />
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={isMobile ? 0 : i * 0.05}>
                <div onClick={() => setExpandedService(expandedService === i ? null : i)} style={{
                  background: T.bg, border: `1px solid ${expandedService === i ? T.gold : T.border}`,
                  borderRadius: 2, padding: "22px 20px", cursor: "pointer", transition: "all 0.25s",
                  boxShadow: expandedService === i ? T.shadow : "none",
                }}>
                  <div style={{ fontSize: 26, marginBottom: 12 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: T.primary, marginBottom: 8, lineHeight: 1.4 }}>{s.title}</h3>
                  <div style={{ maxHeight: expandedService === i ? 200 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                    <p style={{ fontSize: 13.5, color: T.textMid, lineHeight: 1.75, paddingTop: 4 }}>{s.desc}</p>
                  </div>
                  <div style={{ fontSize: 12, color: T.gold, marginTop: 10, fontWeight: 600 }}>{expandedService === i ? "Chiudi ↑" : "Leggi di più ↓"}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding: `80px ${px}`, background: T.bgSection }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 12 }}>I Professionisti</p>
              <h2 style={{ fontSize: isMobile ? "clamp(22px,5vw,32px)" : "clamp(26px,3vw,40px)", fontWeight: 300, color: T.primary }}>Il nostro <strong style={{ fontWeight: 700 }}>team</strong></h2>
              <div style={{ width: 36, height: 2, background: T.gold, margin: "16px auto 0" }} />
            </div>
          </FadeIn>

          {/* Tabs */}
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", gap: isMobile ? 6 : 8, marginBottom: 36, flexWrap: "wrap" }}>
              {TEAM.map((m, i) => (
                <button key={i} onClick={() => setActiveTeam(i)} style={{
                  background: activeTeam === i ? T.primary : "transparent",
                  color: activeTeam === i ? "#fff" : T.textMid,
                  border: `1px solid ${activeTeam === i ? T.primary : T.border}`,
                  padding: isMobile ? "9px 14px" : "10px 20px",
                  borderRadius: 2, fontSize: isMobile ? 12 : 13,
                  cursor: "pointer", fontWeight: activeTeam === i ? 600 : 400,
                  transition: "all 0.2s", whiteSpace: "nowrap",
                }}>
                  {isMobile ? m.name.replace("Avv. ", "").split(" ")[0] : m.name.replace("Avv. ", "")}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Card */}
          {TEAM.map((m, i) => i === activeTeam && (
            <FadeIn key={i} dir="up">
              <div style={{
                background: T.bgAlt, border: `1px solid ${T.border}`, borderRadius: 2,
                overflow: "hidden", boxShadow: T.shadow,
                display: "grid", gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
              }}>
                {/* Photo */}
                <div style={{ position: "relative", background: T.primary, minHeight: isMobile ? 280 : 420 }}>
                  <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", minHeight: isMobile ? 280 : 420, objectFit: "cover", objectPosition: "top", opacity: 0.85, display: "block" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(17,28,58,0.92) 0%, transparent 100%)", padding: "28px 20px 20px" }}>
                    <div style={{ fontSize: 10, color: T.gold, letterSpacing: 2, textTransform: "uppercase", marginBottom: 5 }}>{m.since}</div>
                    <div style={{ fontSize: isMobile ? 17 : 19, fontWeight: 700, color: "#fff" }}>{m.name}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 3 }}>{m.role}</div>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: isMobile ? "24px 20px" : "36px 40px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22 }}>
                    {m.tags.map((tag, ti) => (
                      <span key={ti} style={{ background: T.bgSection, color: T.primary, fontSize: 10, fontWeight: 600, letterSpacing: 0.8, padding: "4px 10px", borderRadius: 1, textTransform: "uppercase", border: `1px solid ${T.border}` }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: isMobile ? 14 : 15, color: T.textMid, lineHeight: 1.85, marginBottom: 24 }}>{m.bio}</p>
                  <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 20 }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 14 }}>Principali traguardi</div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "9px 20px" }}>
                      {m.highlights.map((h, hi) => (
                        <div key={hi} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                          <span style={{ color: T.gold, marginTop: 3, fontSize: 10, flexShrink: 0 }}>◆</span>
                          <span style={{ fontSize: 13, color: T.textMid, lineHeight: 1.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── PARTNERSHIP ── */}
      <section id="partnership" style={{ padding: `80px ${px}`, background: T.bgAlt }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 12 }}>Network</p>
              <h2 style={{ fontSize: isMobile ? "clamp(22px,5vw,32px)" : "clamp(26px,3vw,40px)", fontWeight: 300, color: T.primary }}>Collaborazioni & <strong style={{ fontWeight: 700 }}>Partnership</strong></h2>
              <div style={{ width: 36, height: 2, background: T.gold, margin: "16px auto 0" }} />
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
            {COLLABS.map((c, i) => (
              <FadeIn key={i} delay={isMobile ? 0 : i * 0.06}>
                <div style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 2, padding: "22px 20px", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = T.shadow; e.currentTarget.style.borderColor = T.borderGold; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = T.border; }}>
                  <div style={{ fontSize: 26, marginBottom: 10 }}>{c.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.primary, marginBottom: 7 }}>{c.name}</div>
                  <div style={{ fontSize: 13.5, color: T.textLight, lineHeight: 1.65 }}>{c.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ position: "relative", padding: `80px ${px}`, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMGS.office})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.2)" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(17,28,58,0.72)" }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <FadeIn>
            <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 16 }}>Consulenza Gratuita</p>
            <h2 style={{ fontSize: isMobile ? "clamp(22px,6vw,34px)" : "clamp(26px,3.5vw,42px)", fontWeight: 300, color: "#fff", lineHeight: 1.25, marginBottom: 18 }}>
              Il Suo problema merita<br /><strong style={{ fontWeight: 700 }}>un'attenzione personale</strong>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.62)", marginBottom: 32, lineHeight: 1.8, fontSize: isMobile ? 14 : 15 }}>
              Ogni caso viene valutato direttamente dall'Avv. Piccolo. La prima valutazione è sempre riservata e senza impegno.
            </p>
            <button onClick={() => scrollTo("contatti")} style={{
              background: T.gold, color: "#fff", border: "none",
              padding: isMobile ? "14px 28px" : "15px 36px", borderRadius: 2,
              fontSize: 13, fontWeight: 600, letterSpacing: 1.1,
              textTransform: "uppercase", cursor: "pointer",
            }}>Richiedi una consulenza</button>
          </FadeIn>
        </div>
      </section>

      {/* ── CONTATTI ── */}
      <section id="contatti" style={{ padding: `80px ${px}`, background: T.bgSection }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 12 }}>Dove siamo</p>
              <h2 style={{ fontSize: isMobile ? "clamp(22px,5vw,32px)" : "clamp(26px,3vw,40px)", fontWeight: 300, color: T.primary }}><strong style={{ fontWeight: 700 }}>Contatti</strong> e sede</h2>
              <div style={{ width: 36, height: 2, background: T.gold, margin: "16px auto 0" }} />
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr", gap: isMobile ? 32 : 48, alignItems: "start" }}>
            <FadeIn dir={isMobile ? "up" : "left"}>
              <div>
                {[
                  ["📍", "Sede", "Via G. Bagaini 15\n21100 Varese VA"],
                  ["📞", "Telefono", "+39 0332 283553"],
                  ["✉️", "Email", "info@piccololeg.it"],
                  ["📠", "PEC", "eugenio.piccolo@varese.pecavvocati.it"],
                  ["🕐", "Orari", "Lun–Gio: 8:30–12:30 / 14:30–19:00\nVen: 8:30–12:30\n(su appuntamento)"],
                ].map(([icon, label, val], i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 0", borderBottom: `1px solid ${T.border}` }}>
                    <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: T.gold, fontWeight: 600, marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 14, color: T.textMid, whiteSpace: "pre-line", lineHeight: 1.7 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn dir={isMobile ? "up" : "right"} delay={0.15}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.5!2d8.8255!3d45.8206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+G.+Bagaini+15+Varese!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%" height={isMobile ? 280 : 400}
                style={{ border: "none", borderRadius: 2, boxShadow: T.shadow, display: "block" }}
                allowFullScreen loading="lazy" title="Studio Legale Piccolo - Varese"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: T.primary, padding: `40px ${px} 28px`, color: "rgba(255,255,255,0.5)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", flexWrap: "wrap", gap: 24, marginBottom: 32, paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#fff", textTransform: "uppercase", marginBottom: 3 }}>Studio Legale</div>
              <div style={{ fontSize: 18, fontWeight: 300, color: "#fff", marginBottom: 8 }}>Avv. Eugenio Piccolo</div>
              <div style={{ fontSize: 13, color: T.gold }}>Via G. Bagaini 15 — 21100 Varese</div>
            </div>
            {!isMobile && (
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[["Lo Studio", "studio"], ["Servizi", "servizi"], ["Team", "team"], ["Contatti", "contatti"]].map(([label, id]) => (
                  <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = T.gold} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>{label}</button>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontSize: 11 }}>
            <span>© {new Date().getFullYear()} Studio Legale Avv. Eugenio Piccolo — Tutti i diritti riservati</span>
            <span>Varese · Italia</span>
          </div>
        </div>
      </footer>

      {/* ── CHATBOT BUTTON ── */}
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)} style={{
          position: "fixed", bottom: isMobile ? 20 : 28, right: isMobile ? 20 : 28, zIndex: 500,
          background: T.primary, color: "#fff",
          width: isMobile ? 54 : 60, height: isMobile ? 54 : 60,
          borderRadius: "50%", border: `2px solid ${T.gold}`,
          fontSize: 22, cursor: "pointer",
          boxShadow: "0 8px 32px rgba(17,28,58,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }} title="Assistente Legale">⚖️</button>
      )}

      {/* ── CHATBOT WINDOW ── */}
      {chatOpen && (
        <div style={{
          position: "fixed", zIndex: 500,
          bottom: isMobile ? 0 : 28, right: isMobile ? 0 : 28,
          left: isMobile ? 0 : "auto",
          top: isMobile ? 0 : "auto",
          width: isMobile ? "100%" : 370,
          height: isMobile ? "100%" : 540,
          background: T.bgAlt, borderRadius: isMobile ? 0 : 4,
          boxShadow: "0 24px 80px rgba(17,28,58,0.25)",
          border: isMobile ? "none" : `1px solid ${T.border}`,
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{ background: T.primary, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: T.gold, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⚖️</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>Assistente Legale</div>
                <div style={{ color: T.gold, fontSize: 11 }}>● Online — risposta immediata</div>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer", lineHeight: 1, padding: "0 4px" }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 13px", display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "84%", padding: "11px 14px",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "4px 16px 16px 16px",
                  background: m.role === "user" ? T.primary : T.bgSection,
                  color: m.role === "user" ? "#fff" : T.text,
                  fontSize: 13.5, lineHeight: 1.72, whiteSpace: "pre-wrap", wordBreak: "break-word",
                }}>{m.text}</div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: T.bgSection, borderRadius: "4px 16px 16px 16px", padding: "12px 18px", fontSize: 18, letterSpacing: 4, color: T.textLight }}>···</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick action */}
          {messages.length === 1 && (
            <div style={{ padding: "0 13px 10px", display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => { setInput("Vorrei prenotare un appuntamento"); }} style={{
                background: T.gold, color: "#fff", border: "none",
                padding: "9px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer",
              }}>Prenota appuntamento →</button>
            </div>
          )}

          {/* Input */}
          <div style={{ padding: "10px 12px", borderTop: `1px solid ${T.border}`, display: "flex", gap: 8, background: T.bgAlt, flexShrink: 0 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Scrivi un messaggio..."
              style={{
                flex: 1, border: `1px solid ${T.border}`, borderRadius: 24,
                padding: "10px 16px", fontSize: 14, outline: "none",
                background: T.bgSection, color: T.text,
              }}
            />
            <button onClick={sendMessage} disabled={loading} style={{
              background: T.primary, color: "#fff", border: "none",
              width: 42, height: 42, borderRadius: "50%", cursor: "pointer", fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>→</button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: ${T.borderGold}; border-radius: 3px; }
      `}</style>
    </div>
  );
}
