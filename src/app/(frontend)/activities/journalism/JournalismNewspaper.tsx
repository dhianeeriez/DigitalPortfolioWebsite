"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

const newspaperPages = [
  {
    title: "How I started",
    kicker: "Origins · The first byline",
    image:
      "https://images.unsplash.com/photo-1632207031562-b14b64039497?auto=format&fit=crop&w=1500&q=85",
    alt: "A person reading a printed newspaper",
    lead: "It began with curiosity, a blank page, and the belief that ordinary school stories deserved to be remembered.",
    body: "My earliest assignments taught me to notice details, ask better follow-up questions, and write for someone beyond myself. What started as a classroom responsibility quickly became a way of understanding people and the moments that shape a community.",
  },
  {
    title: "Forte and titles",
    kicker: "The desk · Roles & strengths",
    image:
      "https://images.unsplash.com/photo-1556779182-e1407606c97c?auto=format&fit=crop&w=1500&q=85",
    alt: "A folded white newspaper",
    lead: "Feature writing became my strongest desk: finding the human center of a story and building outward from there.",
    body: "Across reporting, editing, headline writing, and layout, I learned that every role serves the reader. Titles brought responsibility, but the real reward was helping a team turn scattered notes into one clear, compelling edition.",
  },
  {
    title: "Competitions",
    kicker: "Press circuit · Under deadline",
    image:
      "https://images.unsplash.com/photo-1708648706612-8ee5fe5319cd?auto=format&fit=crop&w=1500&q=85",
    alt: "A woman reading and taking notes",
    lead: "Competition rooms made every editorial instinct faster, sharper, and more deliberate.",
    body: "Working against the clock taught me to trust preparation without becoming rigid. Each event was an exercise in listening quickly, choosing an angle, checking facts, and finding calm while the deadline moved closer.",
  },
  {
    title: "Trainings",
    kicker: "Newsroom notes · Practice",
    image:
      "https://images.unsplash.com/photo-1644666694202-693f3405f425?auto=format&fit=crop&w=1500&q=85",
    alt: "A woman studying materials at a table",
    lead: "Workshops turned instinct into method and feedback into a regular part of the writing process.",
    body: "Training sessions covered interviewing, ethics, copy editing, visual hierarchy, and responsible reporting. More importantly, they taught me to revise without losing conviction—and to see every edit as an act of respect for the story.",
  },
  {
    title: "Resource speaking",
    kicker: "Passing it on · The next newsroom",
    image:
      "https://images.unsplash.com/photo-1586339393494-d109a7b9959c?auto=format&fit=crop&w=1500&q=85",
    alt: "Printed words arranged on a bright background",
    lead: "Eventually, the lessons I had gathered became something I could share with younger writers.",
    body: "Speaking about campus journalism brought the journey full circle. I focused on practical habits—finding the real question, protecting accuracy, and writing with empathy—so new reporters could begin with confidence and their own point of view.",
  },
]

export default function JournalismNewspaper() {
  const [pageIndex, setPageIndex] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [turnKey, setTurnKey] = useState(0)

  const turnTo = useCallback(
    (nextPage: number) => {
      if (
        nextPage < 0 ||
        nextPage >= newspaperPages.length ||
        nextPage === pageIndex
      ) {
        return
      }
      setDirection(nextPage > pageIndex ? "forward" : "backward")
      setPageIndex(nextPage)
      setTurnKey((key) => key + 1)
    },
    [pageIndex],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") turnTo(pageIndex + 1)
      if (event.key === "ArrowLeft") turnTo(pageIndex - 1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [pageIndex, turnTo])

  const page = newspaperPages[pageIndex]

  return (
    <main className="newspaper-experience">
      <header className="newspaper-nav">
        <Link href="/activities">← Activities</Link>
        <p>Journalism archive · Five editions</p>
      </header>

      <div className="newspaper-desk">
        <article
          className={`newspaper-sheet newspaper-turn-${direction}`}
          key={turnKey}
        >
          <header className="newspaper-masthead">
            <p>Independent student press</p>
            <h1>The Student Voice</h1>
            <div>
              <span>Vol. 01 · No. {pageIndex + 1}</span>
              <span>Journalism special</span>
              <span>Portfolio edition</span>
            </div>
          </header>

          <div className="newspaper-story">
            <p className="newspaper-kicker">{page.kicker}</p>
            <h2>{page.title}</h2>
            <p className="newspaper-lead">{page.lead}</p>
            <figure>
              <img alt={page.alt} src={page.image} />
              <figcaption>
                Archive image · Edition {String(pageIndex + 1).padStart(2, "0")}
              </figcaption>
            </figure>
            <p className="newspaper-body">{page.body}</p>
          </div>

          <footer className="newspaper-footer">
            <span>Mara Voss · Campus desk</span>
            <span>Page {pageIndex + 1}</span>
          </footer>
        </article>
      </div>

      <div className="newspaper-controls">
        <button
          disabled={pageIndex === 0}
          onClick={() => turnTo(pageIndex - 1)}
          type="button"
        >
          ← Previous page
        </button>
        <div>
          {newspaperPages.map((item, index) => (
            <button
              aria-label={`Open ${item.title}`}
              aria-pressed={pageIndex === index}
              key={item.title}
              onClick={() => turnTo(index)}
              type="button"
            />
          ))}
        </div>
        <button
          disabled={pageIndex === newspaperPages.length - 1}
          onClick={() => turnTo(pageIndex + 1)}
          type="button"
        >
          Next page →
        </button>
      </div>
    </main>
  )
}
