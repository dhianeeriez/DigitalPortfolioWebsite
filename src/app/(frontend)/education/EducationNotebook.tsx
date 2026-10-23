"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

type NotebookPage =
  | {
      type: "cover"
      title: string
      subtitle: string
    }
  | {
      type: "chapter"
      chapter: string
      title: string
      subtitle: string
    }
  | {
      type: "memory"
      title: string
      era: string
      image: string
      alt: string
      note: string
    }

const notebookPages: NotebookPage[] = [
  {
    type: "cover",
    title: "My education",
    subtitle: "Notes, memories & small beginnings",
  },
  {
    type: "chapter",
    chapter: "Chapter 1",
    title: "Pre School",
    subtitle: "Where curiosity first found a classroom.",
  },
  {
    type: "memory",
    title: "Day care",
    era: "The very beginning",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
    alt: "A teacher presenting to students in a classroom",
    note: "The first little routines: sharing a table, listening to stories, and learning that every day could hold something new.",
  },
  {
    type: "memory",
    title: "Kindergarten",
    era: "Learning through play",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=85",
    alt: "A teacher spending time with young students",
    note: "Paint on my hands, songs in the morning, and a growing collection of questions about how everything worked.",
  },
  {
    type: "chapter",
    chapter: "Chapter 2",
    title: "Elementary School",
    subtitle: "Six years of pencils, projects, and becoming.",
  },
  {
    type: "memory",
    title: "Grade 1",
    era: "New pages",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=85",
    alt: "A young student writing on paper",
    note: "Letters became words and numbers became patterns. I discovered the quiet joy of understanding something for the first time.",
  },
  {
    type: "memory",
    title: "Grade 2",
    era: "Finding a rhythm",
    image:
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1400&q=85",
    alt: "Students gathered together on a classroom carpet",
    note: "Classroom friendships grew stronger, reading got faster, and every group project felt like a small adventure.",
  },
  {
    type: "memory",
    title: "Grade 3",
    era: "Bigger ideas",
    image:
      "https://images.unsplash.com/photo-1740635341299-3b8e3490f546?auto=format&fit=crop&w=1400&q=85",
    alt: "An empty classroom filled with desks",
    note: "I started seeing the classroom as a place to experiment—not only to find answers, but to invent better questions.",
  },
  {
    type: "memory",
    title: "Grade 4",
    era: "Curiosity at work",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=85",
    alt: "An apple resting on a stack of school books",
    note: "Books opened worlds far beyond the school gate. Reports and presentations taught me how to shape what I learned into a story.",
  },
  {
    type: "memory",
    title: "Grade 5",
    era: "Carrying more",
    image:
      "https://images.unsplash.com/photo-1726726192148-af52008ff663?auto=format&fit=crop&w=1400&q=85",
    alt: "A yellow school backpack on a table",
    note: "More responsibility arrived with a heavier backpack. I learned to organize, contribute, and trust my own point of view.",
  },
  {
    type: "memory",
    title: "Grade 6",
    era: "A colorful finish",
    image:
      "https://images.unsplash.com/photo-1539795845756-4fadad2905ec?auto=format&fit=crop&w=1400&q=85",
    alt: "A bright collection of colored pencils",
    note: "The final elementary year felt vivid and full. One chapter closed with friendships, confidence, and plenty of color.",
  },
  {
    type: "chapter",
    chapter: "Chapter 3",
    title: "Junior High School",
    subtitle: "New subjects, new voices, and a wider world.",
  },
  {
    type: "memory",
    title: "Grade 7",
    era: "A fresh start",
    image:
      "https://images.unsplash.com/photo-1726726192241-a36ce220c2b3?auto=format&fit=crop&w=1400&q=85",
    alt: "A blue backpack resting on a yellow table",
    note: "A new campus, new teachers, and a new version of myself. The unfamiliar quickly became a place to grow.",
  },
  {
    type: "memory",
    title: "Grade 8",
    era: "Finding my people",
    image:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=1400&q=85",
    alt: "Students with backpacks walking together",
    note: "Collaboration moved beyond assignments. Friends became teammates, critics, and the people who made long days lighter.",
  },
  {
    type: "memory",
    title: "Grade 9",
    era: "Looking outward",
    image:
      "https://images.unsplash.com/photo-1759643740737-9ba5a2e62332?auto=format&fit=crop&w=1400&q=85",
    alt: "A school building framed by a city skyline",
    note: "The world outside school felt closer. I began connecting lessons to real places, people, and possibilities.",
  },
  {
    type: "memory",
    title: "Grade 10",
    era: "Standing together",
    image:
      "https://images.unsplash.com/photo-1769964522071-2a48717b03c5?auto=format&fit=crop&w=1400&q=85",
    alt: "Four students standing together on a school court",
    note: "Junior high ended with a clearer sense of what mattered to me: community, creativity, and work with purpose.",
  },
  {
    type: "chapter",
    chapter: "Chapter 4",
    title: "Senior High School",
    subtitle: "Choosing a direction without losing curiosity.",
  },
  {
    type: "memory",
    title: "Grade 11",
    era: "Choosing a path",
    image:
      "https://images.unsplash.com/photo-1760259906745-5dbce396a116?auto=format&fit=crop&w=1400&q=85",
    alt: "A large school building beneath a clear sky",
    note: "My interests became intentions. Deeper projects asked for independence, discipline, and a reason behind every decision.",
  },
  {
    type: "memory",
    title: "Grade 12",
    era: "The next horizon",
    image:
      "https://images.unsplash.com/photo-1759641801965-a15a53b877b4?auto=format&fit=crop&w=1400&q=85",
    alt: "A schoolyard track surrounded by city buildings",
    note: "The last school year held both endings and momentum—a finish line that looked much more like a beginning.",
  },
]

export default function EducationNotebook() {
  const [pageIndex, setPageIndex] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [turnKey, setTurnKey] = useState(0)

  const turnTo = useCallback(
    (nextIndex: number) => {
      if (
        nextIndex < 0 ||
        nextIndex >= notebookPages.length ||
        nextIndex === pageIndex
      ) {
        return
      }

      setDirection(nextIndex > pageIndex ? "forward" : "backward")
      setPageIndex(nextIndex)
      setTurnKey((key) => key + 1)
    },
    [pageIndex],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") turnTo(pageIndex + 1)
      if (event.key === "ArrowLeft") turnTo(pageIndex - 1)
      if (event.key === "Home") turnTo(0)
      if (event.key === "End") turnTo(notebookPages.length - 1)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [pageIndex, turnTo])

  const page = notebookPages[pageIndex]

  return (
    <main className="education-experience">
      <Link className="notebook-back" href="/#past">
        <span aria-hidden="true">←</span> Back to portfolio
      </Link>

      <p className="notebook-help">Use arrow keys or the page controls</p>

      <div className="notebook-wrap">
        <div className="notebook-shadow" aria-hidden="true" />
        <div className="spiral-binding" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <article
          className={`notebook-page notebook-page-${page.type} page-turn-${direction}`}
          key={turnKey}
        >
          {page.type === "cover" && (
            <div className="cover-content">
              <p>Personal archive · Vol. 01</p>
              <h1>{page.title}</h1>
              <span>{page.subtitle}</span>
              <div className="cover-monogram">MV</div>
            </div>
          )}

          {page.type === "chapter" && (
            <div className="chapter-page-content">
              <p>{page.chapter}</p>
              <h1>{page.title}</h1>
              <span>{page.subtitle}</span>
              <div className="chapter-scribble" aria-hidden="true" />
            </div>
          )}

          {page.type === "memory" && (
            <div className="memory-page-content">
              <header>
                <p>{page.era}</p>
                <h1>{page.title}</h1>
              </header>
              <figure className="taped-photo">
                <span className="tape tape-top" aria-hidden="true" />
                <span className="tape tape-bottom" aria-hidden="true" />
                <img alt={page.alt} src={page.image} />
                <figcaption>Memory placeholder · replace with your photo</figcaption>
              </figure>
              <p className="memory-note">{page.note}</p>
            </div>
          )}

          {page.type !== "cover" && (
            <span className="journal-page-number">{pageIndex}</span>
          )}
        </article>
      </div>

      <div className="notebook-controls">
        <button
          disabled={pageIndex === 0}
          onClick={() => turnTo(pageIndex - 1)}
          type="button"
        >
          <span aria-hidden="true">←</span> Previous
        </button>
        <p>
          <span>{String(pageIndex + 1).padStart(2, "0")}</span> /{" "}
          {String(notebookPages.length).padStart(2, "0")}
        </p>
        <button
          disabled={pageIndex === notebookPages.length - 1}
          onClick={() => turnTo(pageIndex + 1)}
          type="button"
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="notebook-progress" aria-hidden="true">
        <span
          style={{
            transform: `scaleX(${(pageIndex + 1) / notebookPages.length})`,
          }}
        />
      </div>
    </main>
  )
}
