import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Terminal, Globe2, GraduationCap, Send, ExternalLink, Sparkles
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "DIU Drive Bot",
    type: "TELEGRAM BOT · STUDENT RESOURCE",
    description: "A Telegram bot concept for making class lecture slides, PDFs, and study materials easier to access.",
    tags: ["Telegram", "Automation", "Student Tools"],
    link: "https://t.me/diu_drive_bot",
    linkLabel: "View bot",
    icon: "bot"
  },
  {
    number: "02",
    title: "Personal Portfolio",
    type: "WEB DEVELOPMENT",
    description: "A responsive personal space to introduce myself, share selected work, and make it easy to get in touch.",
    tags: ["React", "CSS", "Responsive UI"],
    link: "https://vercel.com",
    linkLabel: "Deployment platform",
    icon: "web"
  },
  {
    number: "03",
    title: "C Programming Practice",
    type: "PROGRAMMING · LEARNING",
    description: "A growing collection of C programming exercises and lab work focused on building strong fundamentals.",
    tags: ["C", "Problem Solving", "Git"],
    link: "https://github.com",
    linkLabel: "GitHub",
    icon: "code"
  }
];

const skills = [
  { name: "C Programming", level: "FOUNDATION", icon: "C" },
  { name: "HTML & CSS", level: "WEB BASICS", icon: "⌘" },
  { name: "JavaScript", level: "LEARNING", icon: "JS" },
  { name: "React", level: "LEARNING", icon: "⚛" },
  { name: "Git & GitHub", level: "TOOLS", icon: "⌁" },
  { name: "Problem Solving", level: "CORE SKILL", icon: "↗" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Jony Roy home">
          <span className="brand-mark">JR<span>.</span></span>
          <span className="brand-name">JONY ROY</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR LEARNING & COLLABORATION</div>
            <h1>Hi, I'm <span className="gradient-text">Jony Roy.</span><br/>I build things for<br/><span className="outline-text">the digital world.</span></h1>
            <p className="hero-subtitle">A Computer Science student exploring code, creative ideas, and the craft of building useful digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact"><Mail size={16}/> Get in touch</a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-line"/> BASED IN BANGLADESH</span>
              <span>COMPUTER SCIENCE STUDENT</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="code-card">
              <div className="code-card-top"><div className="window-dots"><i/><i/><i/></div><span>jony.js</span><span className="code-live">● LIVE</span></div>
              <div className="code-content">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><span className="line-no">02</span>  name: <span className="code-green">'Jony Roy'</span>,</div>
                <div><span className="line-no">03</span>  focus: <span className="code-green">'Web Development'</span>,</div>
                <div><span className="line-no">04</span>  mindset: <span className="code-green">'Always learning'</span>,</div>
                <div><span className="line-no">05</span>  build: <span className="code-purple">true</span></div>
                <div><span className="line-no">06</span>{"}"};</div>
                <div className="code-spacer"/>
                <div><span className="line-no">07</span><span className="code-muted">// turning ideas into reality</span></div>
                <div><span className="line-no">08</span><span className="code-blue">developer</span>.start<span className="code-yellow">()</span><span className="cursor">▍</span></div>
              </div>
              <div className="code-card-footer"><span><span className="footer-pulse"/> BUILDING THE NEXT THING</span><span>v1.0.0</span></div>
            </div>
            <div className="floating-chip chip-top"><Code2 size={15}/> CREATIVE CODE</div>
            <div className="floating-chip chip-bottom"><Sparkles size={15}/> ALWAYS LEARNING</div>
            <div className="hero-index">01 <span/> 04</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDown size={15}/></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker"><span>01</span> / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Curious mind.<br/><span className="muted-heading">Builder's mindset.</span></h2></div>
            <div className="about-copy">
              <p className="lead-copy">I'm Jony Roy, a CSE student with a curiosity for technology and a passion for learning how things work.</p>
              <p>I'm currently strengthening my programming fundamentals while exploring modern web development. I enjoy turning ideas into practical projects, experimenting with new tools, and improving a little with every build.</p>
              <div className="about-facts">
                <div><GraduationCap size={18}/><span><b>Computer Science</b><small>Academic background</small></span></div>
                <div><Terminal size={18}/><span><b>Learning by building</b><small>My development approach</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-kicker"><span>02</span> / WHAT I WORK WITH</div>
          <div className="section-heading-row"><h2>Tools & <span className="muted-heading">technologies.</span></h2><p>A growing toolkit, built one concept at a time.</p></div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-card-top"><span className="skill-symbol">{skill.icon}</span><span className="skill-index">0{i + 1}</span></div>
                <h3>{skill.name}</h3><span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-kicker"><span>03</span> / SELECTED WORK</div>
          <div className="section-heading-row"><h2>Things I've <span className="muted-heading">worked on.</span></h2><p>Small steps. Real projects. Continuous progress.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel} for ${project.title}`}><ArrowUpRight size={21}/></a>
              </article>
            ))}
          </div>
          <p className="project-note">Some entries are starter examples — replace the links and descriptions with your live projects as you publish them.</p>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="section-kicker"><span>04</span> / GET IN TOUCH</div>
          <div className="contact-panel">
            <div className="contact-glow"/>
            <div className="contact-content">
              <span className="contact-overline">HAVE AN IDEA IN MIND?</span>
              <h2>Let's make<br/><span className="gradient-text">something great.</span></h2>
              <p>I'm open to connecting, learning together, and exploring interesting opportunities.</p>
              <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com?subject=Hello%20Jony">Say hello <Send size={16}/></a>
            </div>
            <div className="contact-aside">
              <span className="aside-label">FIND ME ONLINE</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
              <a href="mailto:YOUR_EMAIL@example.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a>
              <div className="contact-location"><Globe2 size={15}/> Bangladesh</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">JR<span>.</span></span></a>
        <span>DESIGNED & BUILT BY JONY ROY</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <small>© {new Date().getFullYear()} Jony Roy. All rights reserved.</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
