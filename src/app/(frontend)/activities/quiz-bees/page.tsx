import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quiz Bees — Mara Voss",
  description: "TLE Quiz Bee highlights from 2018 and 2019.",
}

const quizBees = [
  {
    year: "2018",
    title: "TLE Quiz Bee 2018",
    image:
      "https://images.unsplash.com/photo-1760420957123-08a562e52940?auto=format&fit=crop&w=1500&q=85",
    alt: "A young student concentrating on a written test",
    caption:
      "The first competition taught me to stay composed, trust what I had prepared, and keep moving when the answer did not arrive immediately.",
  },
  {
    year: "2019",
    title: "TLE Quiz Bee 2019",
    image:
      "https://images.unsplash.com/photo-1701688821013-232a313f8cf8?auto=format&fit=crop&w=1500&q=85",
    alt: "Students participating in a competition at desks",
    caption:
      "Returning a year later felt different: more focused, more strategic, and more excited by the challenge than intimidated by it.",
  },
]

export default function QuizBeesPage() {
  return (
    <main className="quiz-archive">
      <header className="quiz-archive-header">
        <Link href="/activities">← Activities</Link>
        <p>Knowledge archive · 2018–2019</p>
      </header>

      <div className="quiz-archive-title">
        <p>Two years · Two challenges</p>
        <h1>Quiz bees</h1>
      </div>

      <section className="quiz-cards">
        {quizBees.map((quiz, index) => (
          <article className="quiz-memory-card" key={quiz.year}>
            <span className="quiz-card-index">0{index + 1}</span>
            <figure>
              <img alt={quiz.alt} src={quiz.image} />
              <span aria-hidden="true">?</span>
            </figure>
            <div className="quiz-card-copy">
              <p>{quiz.year} · Technology & Livelihood Education</p>
              <h2>{quiz.title}</h2>
              <span>{quiz.caption}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
