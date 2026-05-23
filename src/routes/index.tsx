import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  ArrowRight, Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Code2, Coffee, FileCode2, Palette, Braces, Brain, GraduationCap, Briefcase, Send,
} from "lucide-react";
import { toast } from "sonner";

import profileImg from "@/assets/profile.jpg";
import { Nav } from "@/components/portfolio/Nav";
import { Typing } from "@/components/portfolio/Typing";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Loader } from "@/components/portfolio/Loader";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elangovan K — AI & Data Science Student | Portfolio" },
      { name: "description", content: "Portfolio of Elangovan K, AI & Data Science student skilled in Python, Java, JavaScript and NLP. Projects, resume and contact." },
      { property: "og:title", content: "Elangovan K — AI & Data Science Portfolio" },
      { property: "og:description", content: "Projects, skills and resume of Elangovan K, AI & Data Science student." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Elangovan K",
        jobTitle: "AI & Data Science Student",
        knowsAbout: ["Python", "Java", "JavaScript", "NLP", "Data Science"],
      }),
    }],
  }),
  component: Portfolio,
});

const skills = [
  { name: "Python", level: 90, Icon: Code2 },
  { name: "Java", level: 80, Icon: Coffee },
  { name: "JavaScript", level: 78, Icon: Braces },
  { name: "HTML", level: 92, Icon: FileCode2 },
  { name: "CSS", level: 85, Icon: Palette },
  { name: "NLP", level: 75, Icon: Brain },
];

const projects = [
  {
    title: "Govt & Defence Exam Guidance Chatbot",
    description:
      "An NLP-powered conversational assistant that guides aspirants through Indian government and defence service examinations — eligibility, syllabus, timelines and study tips.",
    tech: ["Python", "NLP", "Flask", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
  },
];

const timeline = [
  { year: "2023 – Present", title: "B.Tech in AI & Data Science", place: "Engineering College", Icon: GraduationCap },
  { year: "2024", title: "NLP Research — Chatbot Project", place: "Academic Project", Icon: Brain },
  { year: "2025", title: "Open to Internships & Placements", place: "Available Now", Icon: Briefcase },
];

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            (e.target as HTMLElement).style.opacity = "1";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

function Portfolio() {
  const ref = useReveal();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast.success("Message sent! I'll get back to you soon.");
    form.reset();
  };

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <Loader />
      <ParticleBackground />
      <Nav />
      <BackToTop />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center px-4 pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <div data-reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-primary" />
              Available for internships
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              Hi, I'm <span className="text-gradient">Elangovan K</span>
            </h1>
            <h2 className="mt-4 text-2xl font-medium md:text-3xl">
              I'm a <Typing words={["AI & Data Science Student", "Python Developer", "NLP Enthusiast", "Problem Solver"]} />
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Building intelligent systems and beautiful interfaces. Passionate about machine learning,
              natural language processing, and turning data into impactful products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-105"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-foreground transition hover:glow-ring"
              >
                Contact Me
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div data-reveal className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-4 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
              <div className="absolute -inset-1 rounded-full bg-gradient-primary" />
              <img
                src={profileImg}
                alt="Elangovan K"
                width={320}
                height={320}
                className="relative h-72 w-72 rounded-full object-cover md:h-80 md:w-80"
              />
              <div className="glass absolute -bottom-3 -left-3 rounded-2xl px-4 py-2 text-xs shadow-card">
                <span className="text-gradient font-semibold">3+ years</span> of coding
              </div>
              <div className="glass absolute -right-2 top-6 rounded-2xl px-4 py-2 text-xs shadow-card">
                <span className="text-gradient font-semibold">NLP</span> & AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 — About" title="A little about me">
        <div data-reveal className="glass rounded-3xl p-8 shadow-card md:p-12">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <h3 className="font-display text-2xl font-bold">
                Engineering minds and machines, one model at a time.
              </h3>
              <p className="mt-4 text-muted-foreground">
                I'm an AI & Data Science undergraduate exploring the intersection of human language
                and intelligent software. I love writing clean Python, prototyping NLP experiments,
                and shipping web apps that feel as good as they perform.
              </p>
              <p className="mt-4 text-muted-foreground">
                My current focus is building practical AI tools that help real people — from
                exam-guidance chatbots to data-driven recommendation systems.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <Stat value="6+" label="Technologies" />
                <Stat value="5+" label="Projects" />
                <Stat value="∞" label="Curiosity" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="mb-4 font-display text-lg font-semibold">Journey</h4>
              <ol className="relative ml-3 border-l border-border">
                {timeline.map((t) => (
                  <li key={t.title} className="mb-6 ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground">
                      <t.Icon className="h-3 w-3" />
                    </span>
                    <p className="text-xs text-muted-foreground">{t.year}</p>
                    <p className="font-medium">{t.title}</p>
                    <p className="text-sm text-muted-foreground">{t.place}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="02 — Skills" title="My toolbox">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.name}
              data-reveal
              className="glass group rounded-2xl p-6 shadow-card transition hover:-translate-y-1 hover:glow-ring"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-primary p-2 text-primary-foreground transition group-hover:scale-110">
                    <s.Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-lg font-semibold">{s.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              data-reveal
              className="glass group relative overflow-hidden rounded-3xl p-8 shadow-card transition hover:-translate-y-2 hover:glow-ring"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl transition group-hover:opacity-40" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm text-primary-foreground transition hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div
            data-reveal
            className="glass flex flex-col items-center justify-center rounded-3xl border-dashed p-10 text-center"
          >
            <div className="mb-3 rounded-2xl bg-gradient-primary p-3 text-primary-foreground">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold">More projects coming soon</h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              I'm constantly building. Follow my GitHub to see what's next.
            </p>
          </div>
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" eyebrow="04 — Resume" title="My credentials, in one click">
        <div data-reveal className="glass relative overflow-hidden rounded-3xl p-10 shadow-card md:p-14">
          <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-bold">Get the full story.</h3>
              <p className="mt-3 text-muted-foreground">
                Download a PDF copy of my résumé — including education, skills, projects and contact details.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-105"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Stat value="B.Tech" label="AI & Data Science" />
              <Stat value="2026" label="Expected Grad" />
              <Stat value="6+" label="Core Skills" />
              <Stat value="Open" label="To Opportunities" />
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="05 — Contact" title="Let's build something together">
        <div className="grid gap-6 md:grid-cols-5">
          <div data-reveal className="glass rounded-3xl p-8 shadow-card md:col-span-2">
            <h3 className="font-display text-xl font-bold">Reach me directly</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I usually reply within a day. For internships, collaborations or a friendly hello.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <ContactRow Icon={Mail} label="Email" value="elangovan.k@example.com" href="mailto:elangovan.k@example.com" />
              <ContactRow Icon={Phone} label="Phone" value="+91 98765 43210" href="tel:+919876543210" />
              <ContactRow Icon={Linkedin} label="LinkedIn" value="linkedin.com/in/elangovan-k" href="https://linkedin.com/" />
              <ContactRow Icon={Github} label="GitHub" value="github.com/elangovan-k" href="https://github.com/" />
              <ContactRow Icon={MapPin} label="Location" value="Tamil Nadu, India" />
            </ul>
          </div>
          <form
            data-reveal
            onSubmit={onSubmit}
            className="glass rounded-3xl p-8 shadow-card md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="Internship opportunity" className="mt-4" />
            <div className="mt-4">
              <label className="mb-1 block text-xs text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me a bit about your idea..."
                className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-ring focus:glow-ring"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition hover:scale-105"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative mt-24 border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-display text-lg">
            <span className="text-gradient font-bold">EK</span>
            <span className="text-muted-foreground">.dev</span>
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:elangovan.k@example.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass rounded-full p-3 transition hover:-translate-y-1 hover:glow-ring"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elangovan K. Crafted with care.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/30 p-4">
      <p className="font-display text-2xl font-bold text-gradient">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function ContactRow({
  Icon, label, value, href,
}: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-gradient-primary p-2 text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="block transition hover:translate-x-1">
        {inner}
      </a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function Field({
  label, name, type = "text", placeholder, required, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1 block text-xs text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-ring focus:glow-ring"
      />
    </div>
  );
}
