"use client"

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react"
import Link from "next/link"
import { submitContact, type ContactActionState } from "./actions"

const aboutItems = [
  { label: "Past", href: "#past" },
  { label: "Present", href: "#present" },
  { label: "Future", href: "#future" },
]

const pastCards = [
  {
    title: "My education",
    label: "Foundation / 01",
    description:
      "A practice shaped through visual communication, cultural research, and making ideas tangible.",
    detail:
      "I studied communication design with a focus on identity systems, editorial thinking, and spatial storytelling.",
  },
  {
    title: "Extracurricular activities",
    label: "Beyond the studio / 02",
    description:
      "The collectives, experiments, and volunteer work that taught me how creative communities grow.",
    detail:
      "From student-led exhibitions to independent publishing workshops, these spaces made collaboration central to my process.",
  },
  {
    title: "Achievements / awards",
    label: "Recognition / 03",
    description:
      "Selected moments of recognition for work that balanced clarity, character, and cultural relevance.",
    detail:
      "Highlights include emerging creative awards, jury selections, and features across independent design publications.",
  },
]

const projects = [
  {
    title: "The Pinetree",
    category: "Brand system",
    year: "2025",
    href: "/projects/the-pinetree",
    summary:
      "A flexible identity built to make complex climate research feel immediate and human.",
  },
  {
    title: "Competition outputs",
    category: "Digital platform",
    year: "2024",
    href: "/projects/competition-outputs",
    summary:
      "A shared digital home for independent makers, local stories, and unexpected collaboration.",
  },
]

const initialContactState: ContactActionState = {
  status: "idle",
  message: "",
  errors: {},
}

export default function Portfolio() {
  const [menuVisible, setMenuVisible] = useState(true)
  const [activePastCard, setActivePastCard] = useState(0)
  const [expandedPastCard, setExpandedPastCard] = useState<number | null>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [presentVisible, setPresentVisible] = useState(false)
  const previousScrollY = useRef(0)
  const presentSectionRef = useRef<HTMLElement>(null)
  const [contactState, contactAction, contactPending] = useActionState(
    submitContact,
    initialContactState,
  )

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollingUp = currentScrollY < previousScrollY.current

      setMenuVisible(currentScrollY < 32 || scrollingUp)
      previousScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const section = presentSectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPresentVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const showPastCard = (index: number) => {
    setActivePastCard((index + pastCards.length) % pastCards.length)
    setExpandedPastCard(null)
  }

  const moveFutureLight = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100

    event.currentTarget.style.setProperty("--future-x", `${x}%`)
    event.currentTarget.style.setProperty("--future-y", `${y}%`)
  }

  return (
    <main>
      <header
        className={`site-header ${menuVisible ? "is-visible" : "is-hidden"}`}
      >
        <nav className="site-nav" aria-label="Portfolio">
          <div className="nav-side nav-side-left">
            <span className="edition">Portfolio / 26</span>
          </div>

          <a className="logo" href="#top" aria-label="Mara Voss, home">
            <svg viewBox="0 0 256 256" aria-hidden="true">
              <circle cx="128" cy="128" r="128" fill="#f1eee7" />
              <image
                width="256"
                height="256"
                href="data:image/webp;base64,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"
              />
            </svg>
          </a>

          <div className="nav-side nav-side-right">
            <details className="nav-dropdown">
              <summary className="nav-link dropdown-trigger">
                About me
                <span className="dropdown-icon" aria-hidden="true" />
              </summary>
              <div className="dropdown-menu">
                <p className="dropdown-label">Timeline</p>
                {aboutItems.map((item, index) => (
                  <a
                    key={item.label}
                    className="dropdown-link"
                    href={item.href}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="landing" id="top" aria-labelledby="portfolio-title">
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1591394197887-b27e1ba3b2f9?auto=format&fit=crop&w=2400&q=90"
            alt="Geometric concrete architecture beneath a bright sky"
          />
          <div className="hero-overlay" />
          <div className="hero-grain" />

          <p className="hero-kicker">Independent creative director</p>
          <h1 id="portfolio-title">
            <span>Mara</span>
            <span>Voss</span>
          </h1>
          <div className="hero-footer">
            <span>Berlin, DE</span>
            <a href="#past">Explore selected work</a>
            <span>Scroll to discover</span>
          </div>
        </div>
      </section>

      <section
        className="chapter chapter-past"
        id="past"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") showPastCard(activePastCard - 1)
          if (event.key === "ArrowRight") showPastCard(activePastCard + 1)
        }}
        tabIndex={0}
      >
        <p className="chapter-number">01 / Past</p>
        <div className="chapter-copy past-copy">
          <p className="eyebrow">Selected foundations · 2018–2022</p>
          <h2>Form follows feeling.</h2>

          <div className="past-carousel" aria-roledescription="carousel">
            <div className="carousel-meta">
              <p aria-live="polite">
                <span>0{activePastCard + 1}</span> / 0{pastCards.length}
              </p>
              <div className="carousel-controls">
                <button
                  aria-label="Previous card"
                  onClick={() => showPastCard(activePastCard - 1)}
                  type="button"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  aria-label="Next card"
                  onClick={() => showPastCard(activePastCard + 1)}
                  type="button"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="carousel-viewport">
              <div className={`past-track past-track-${activePastCard}`}>
                {pastCards.map((card, index) => {
                  const isActive = activePastCard === index
                  const isExpanded = expandedPastCard === index
                  const detailHref =
                    index === 0
                      ? "/education"
                      : index === 1
                        ? "/activities"
                        : "/awards"

                  return (
                    <article
                      aria-hidden={!isActive}
                      aria-label={`${index + 1} of ${pastCards.length}`}
                      className={`past-card past-card-${index + 1} ${
                        isActive ? "is-active" : ""
                      }`}
                      key={card.title}
                    >
                      <div className="card-topline">
                        <span>{card.label}</span>
                        <span className="card-orbit" aria-hidden="true" />
                      </div>
                      <h3>{card.title}</h3>
                      <div className="card-bottom">
                        <p>{card.description}</p>
                        <div
                          className={`card-detail ${
                            isExpanded ? "is-expanded" : ""
                          }`}
                        >
                          <p>{card.detail}</p>
                        </div>
                        {detailHref ? (
                          <Link
                            className="learn-more-button"
                            href={detailHref}
                            tabIndex={isActive ? 0 : -1}
                          >
                            Learn more
                            <span aria-hidden="true">↗</span>
                          </Link>
                        ) : (
                          <button
                            className="learn-more-button"
                            onClick={() =>
                              setExpandedPastCard(isExpanded ? null : index)
                            }
                            tabIndex={isActive ? 0 : -1}
                            type="button"
                          >
                            {isExpanded ? "Show less" : "Learn more"}
                            <span aria-hidden="true">
                              {isExpanded ? "−" : "+"}
                            </span>
                          </button>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="carousel-dots" aria-label="Choose a card">
              {pastCards.map((card, index) => (
                <button
                  aria-label={`Show ${card.title}`}
                  aria-pressed={activePastCard === index}
                  key={card.title}
                  onClick={() => showPastCard(index)}
                  type="button"
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`chapter chapter-present ${
          presentVisible ? "is-in-view" : ""
        }`}
        id="present"
        ref={presentSectionRef}
      >
        <p className="chapter-number">02 / Present</p>
        <div className="present-layout">
          <div className="present-copy">
            <p className="eyebrow">Current practice · 2023–Now</p>
            <h2>Building bold, useful worlds.</h2>
            <p className="description">
              Directing brand systems and digital experiences with studios,
              founders, and cultural organizations.
            </p>
          </div>

          <div className="id-stage">
            <div className="id-drop">
              <div className="id-sway">
                <div className="lanyard-straps" aria-hidden="true" />
                <div className="id-clip" aria-hidden="true">
                  <span />
                </div>

                <article className="school-id">
                  <div className="school-id-header">
                    <div className="school-mark" aria-hidden="true">
                      MV
                    </div>
                    <div>
                      <p>Institute of Visual Arts</p>
                      <span>Student identification</span>
                    </div>
                  </div>

                  <div className="id-photo">
                    <img
                      alt="Placeholder portrait for Mara Voss's school ID"
                      src="https://images.unsplash.com/photo-1763551229518-4a529c865e00?auto=format&fit=crop&w=900&q=85"
                    />
                    <span>Replace with your photo</span>
                  </div>

                  <div className="id-identity">
                    <div>
                      <span>Name</span>
                      <strong>Mara Voss</strong>
                    </div>
                    <div>
                      <span>Program</span>
                      <strong>Visual Communication</strong>
                    </div>
                  </div>

                  <div className="id-code">
                    <span>MV–2026–041</span>
                    <span aria-hidden="true">|||| ||| || ||||</span>
                  </div>
                </article>

                <div className="id-text-box">
                  <p>
                    I translate research and instinct into visual systems that
                    people can feel, use, and remember.
                  </p>
                </div>

                <Link className="id-learn-more" href="/present">
                  Learn More <span aria-hidden="true">↘</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="chapter chapter-future"
        id="future"
        onPointerMove={moveFutureLight}
      >
        <div className="future-grid" aria-hidden="true" />
        <div className="future-glow" aria-hidden="true" />
        <p className="chapter-number">03 / Future</p>
        <div className="future-copy">
          <p className="eyebrow">Open horizon · Next</p>
          <h2>What should exist tomorrow?</h2>
          <p className="description">
            I’m looking for ambitious collaborations across art, technology,
            publishing, and place.
          </p>
        </div>

        <div className="hanging-question" aria-hidden="true">
          <span className="question-thread" />
          <span className="question-mark">?</span>
        </div>

        <div
          className="crystal-ball"
          role="img"
          aria-label="Fortune teller's crystal ball"
        >
          <div className="crystal-orb">
            <span className="crystal-mist" />
          </div>
          <div className="crystal-collar" />
          <div className="crystal-base" />
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-marquee" aria-hidden="true">
          <span>Selected work · Ideas in motion · Selected work · Ideas in motion ·</span>
          <span>Selected work · Ideas in motion · Selected work · Ideas in motion ·</span>
        </div>

        <div className="projects-heading">
          <p className="chapter-number">04 / Projects</p>
          <div>
            <p className="eyebrow">A few things I’ve helped bring to life</p>
            <h2>Selected work, in motion.</h2>
          </div>
        </div>

        <div className="projects-layout">
          <div className="project-controls">
            <p className="project-instruction">
              Choose a project to open its paper archive.
            </p>
            <div className="project-tabs" role="tablist" aria-label="Projects">
              {projects.map((project, index) => (
                <Link
                  aria-selected={activeProject === index}
                  className={activeProject === index ? "is-active" : ""}
                  href={project.href}
                  key={project.title}
                  onFocus={() => setActiveProject(index)}
                  onMouseEnter={() => setActiveProject(index)}
                  role="tab"
                >
                  <span>0{index + 1}</span>
                  <strong>{project.title}</strong>
                  <span>{project.year}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="project-deck" aria-live="polite">
            {projects.map((project, index) => {
              const position =
                (index - activeProject + projects.length) % projects.length

              return (
                <Link
                  aria-label={`View ${project.title}`}
                  className={`project-card project-card-${index + 1} deck-position-${position}`}
                  href={project.href}
                  key={project.title}
                  onFocus={() => setActiveProject(index)}
                  onMouseEnter={() => setActiveProject(index)}
                >
                  <span className="project-card-number">0{index + 1}</span>
                  <div className="project-card-art" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                  <div className="project-card-copy">
                    <p>
                      {project.category} · {project.year}
                    </p>
                    <h3>{project.title}</h3>
                    <span>{project.summary}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="chapter-number">05 / Contact</p>
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2>Let’s make something matter.</h2>
            <p className="contact-note">
              Tell me what you’re building, what feels unresolved, or where you
              want to go next. I usually reply within two working days.
            </p>
          </div>
        </div>

        <div className="contact-form-wrap">
          {contactState.status === "success" ? (
            <div className="contact-success" aria-live="polite">
              <p className="eyebrow">Message received</p>
              <p>Thank you. I’ll be in touch soon.</p>
            </div>
          ) : (
            <form action={contactAction} className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input
                  autoComplete="name"
                  id="name"
                  maxLength={120}
                  name="name"
                  placeholder="Name"
                  required
                  type="text"
                />
                {contactState.errors?.name && (
                  <span className="form-error">{contactState.errors.name}</span>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  autoComplete="email"
                  id="email"
                  maxLength={254}
                  name="email"
                  placeholder="you@studio.com"
                  required
                  type="email"
                />
                {contactState.errors?.email && (
                  <span className="form-error">
                    {contactState.errors.email}
                  </span>
                )}
              </div>

              <div className="form-field form-field-wide">
                <label htmlFor="projectType">I’m interested in</label>
                <select
                  defaultValue=""
                  id="projectType"
                  name="projectType"
                  required
                >
                  <option disabled value="">
                    Select a project type
                  </option>
                  <option value="brand">Brand direction</option>
                  <option value="digital">Digital experience</option>
                  <option value="campaign">Campaign or editorial</option>
                  <option value="other">Something else</option>
                </select>
                {contactState.errors?.projectType && (
                  <span className="form-error">
                    {contactState.errors.projectType}
                  </span>
                )}
              </div>

              <div className="form-field form-field-wide">
                <label htmlFor="message">A little about the project</label>
                <textarea
                  id="message"
                  maxLength={4000}
                  minLength={10}
                  name="message"
                  placeholder="What are we making?"
                  required
                  rows={4}
                />
                {contactState.errors?.message && (
                  <span className="form-error">
                    {contactState.errors.message}
                  </span>
                )}
              </div>

              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  autoComplete="off"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  type="text"
                />
              </div>

              {contactState.status === "error" && contactState.message && (
                <p className="form-message" aria-live="polite">
                  {contactState.message}
                </p>
              )}

              <button
                className="submit-button"
                disabled={contactPending}
                type="submit"
              >
                <span>{contactPending ? "Sending…" : "Send inquiry"}</span>
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>

        <footer className="social-footer">
          <p>Mara Voss © 2026</p>
          <nav aria-label="Social links">
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
            >
              Instagram <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.are.na" rel="noreferrer" target="_blank">
              Are.na <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  )
}
