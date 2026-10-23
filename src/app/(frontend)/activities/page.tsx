import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Extracurricular Activities — Mara Voss",
  description: "Journalism, social work, and quiz bee activities.",
}

const activities = [
  {
    title: "Journalism",
    href: "/activities/journalism",
    className: "activity-journalism",
    icon: (
      <svg viewBox="0 0 240 220" aria-hidden="true">
        <path className="icon-paper" d="M41 28h158v164H41z" />
        <path className="icon-fold" d="M173 28v28h26" />
        <path className="icon-headline" d="M62 55h86M62 72h62" />
        <path className="icon-photo" d="M62 92h58v48H62z" />
        <path className="icon-copy" d="M132 95h45M132 108h45M132 121h37M62 154h115M62 168h98" />
      </svg>
    ),
  },
  {
    title: "Social works",
    href: "/activities/social-works",
    className: "activity-social",
    icon: (
      <svg viewBox="0 0 240 220" aria-hidden="true">
        <circle className="icon-person-head" cx="120" cy="50" r="24" />
        <path
          className="icon-person"
          d="M120 77c-33 0-45 23-45 54v57M120 77c33 0 45 23 45 54v57M91 96l-37 49M149 96l37 49M95 188l25-57 25 57"
        />
        <path className="icon-heart" d="M120 104c-16-19-36 6 0 30 36-24 16-49 0-30Z" />
      </svg>
    ),
  },
  {
    title: "Quiz bees",
    href: "/activities/quiz-bees",
    className: "activity-quiz",
    icon: (
      <svg viewBox="0 0 240 220" aria-hidden="true">
        <path
          className="icon-brain"
          d="M119 35c-17-20-48-7-49 17-23-3-34 28-18 43-18 14-8 47 16 48-5 25 25 39 43 22l8 17M121 35c17-20 48-7 49 17 23-3 34 28 18 43 18 14 8 47-16 48 5 25-25 39-43 22l-8 17"
        />
        <path className="icon-brain-lines" d="M120 45v119M81 58c20 2 23 17 20 32M64 104c20-8 36 4 39 19M159 58c-20 2-23 17-20 32M176 104c-20-8-36 4-39 19" />
        <path className="icon-spark" d="m194 35 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z" />
      </svg>
    ),
  },
]

export default function ActivitiesPage() {
  return (
    <main className="activities-directory">
      <header className="activities-header">
        <Link href="/#past">← Back to portfolio</Link>
        <p>Extracurricular archive · 03 paths</p>
      </header>

      <div className="activities-title">
        <p>Outside the classroom</p>
        <h1>What I did beyond the syllabus.</h1>
      </div>

      <nav className="activity-grid" aria-label="Extracurricular activities">
        {activities.map((activity, index) => (
          <Link
            className={`activity-item ${activity.className}`}
            href={activity.href}
            key={activity.title}
          >
            <span className="activity-index">0{index + 1}</span>
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-label">
              <h2>{activity.title}</h2>
              <span aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </nav>
    </main>
  )
}
