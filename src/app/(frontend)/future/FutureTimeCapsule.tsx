"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const futurePhoto =
  "https://images.unsplash.com/photo-1631877826413-7403f98656a4?auto=format&fit=crop&w=1600&q=90"

export default function FutureTimeCapsule() {
  const [photoOpen, setPhotoOpen] = useState(false)

  useEffect(() => {
    if (!photoOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPhotoOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [photoOpen])

  return (
    <main className="future-capsule-page">
      <div className="future-capsule-grid" aria-hidden="true" />
      <header className="future-capsule-nav">
        <Link href="/#future">← Back to portfolio</Link>
        <p>Time capsule · Scheduled 2035</p>
      </header>

      <section className="future-capsule-layout">
        <div className="future-capsule-intro">
          <p>Transmission 01 / Future self</p>
          <h1>A photograph that hasn’t happened yet.</h1>
          <span>
            The image is still uncertain. Click the Polaroid to bring this
            possible future into focus.
          </span>
        </div>

        <button
          aria-label="Open and reveal future portrait"
          className="future-polaroid"
          onClick={() => setPhotoOpen(true)}
          type="button"
        >
          <span className="future-photo-window">
            <img alt="Placeholder portrait of Mara Voss in the future" src={futurePhoto} />
            <span className="future-photo-noise" aria-hidden="true" />
          </span>
          <span className="future-polaroid-caption">
            <b>Me, somewhere in 2035</b>
            <em>Click to resolve image</em>
          </span>
          <span className="future-polaroid-stamp">Open / 2035</span>
        </button>

        <article className="future-letter">
          <header>
            <p>Letter to my future self</p>
            <span>03 · 18 · 2035</span>
          </header>
          <label htmlFor="future-description">Describe your future here</label>
          <textarea
            defaultValue="I see myself doing work that is thoughtful, brave, and useful—surrounded by people who keep me curious. I hope success still means making room for others, staying open to change, and building a life that feels as meaningful as it looks."
            id="future-description"
            rows={8}
          />
          <footer>
            <span>Mara, present day</span>
            <span aria-hidden="true">MV</span>
          </footer>
        </article>
      </section>

      <div className="future-timeline" aria-hidden="true">
        <span>2026 · Now</span>
        <div>
          <i />
        </div>
        <span>2035 · Open</span>
      </div>

      {photoOpen && (
        <div
          aria-label="Resolved future portrait"
          aria-modal="true"
          className="future-photo-modal"
          onClick={() => setPhotoOpen(false)}
          role="dialog"
        >
          <button
            aria-label="Close future portrait"
            className="future-modal-close"
            onClick={() => setPhotoOpen(false)}
            type="button"
          >
            Close ×
          </button>
          <figure
            className="resolved-polaroid"
            onClick={(event) => event.stopPropagation()}
          >
            <img alt="Clear placeholder portrait of Mara Voss in the future" src={futurePhoto} />
            <figcaption>
              <p>Future self · Image resolved</p>
              <span>Replace this with your own future portrait</span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
