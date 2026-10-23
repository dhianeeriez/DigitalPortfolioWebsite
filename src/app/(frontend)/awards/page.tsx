import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Awards Wall — Mara Voss",
  description: "Honor, community, and journalism awards from Mara Voss's archive.",
}

const awardImages = [
  "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1705925716592-259267037a03?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1514820720301-4c4790309f46?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1706193589333-da530df63ecf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1706374503312-7a4a4c030d2d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1637635753380-20bf6f46ede0?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1757365225211-1515ecc8a109?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1790548156651-8a46f6b76715?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1598701452726-1900d01b5c18?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1583774139366-a903e7bc5236?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1738190228336-aa4cf73874b7?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1635868355594-a297d37b3494?auto=format&fit=crop&w=900&q=85",
]

const honorTitles = [
  "With Honors · Grade 1",
  "With Honors · Grade 2",
  "With High Honors · Grade 3",
  "Academic Excellence · Grade 4",
  "With High Honors · Grade 5",
  "Outstanding Graduate · Grade 6",
  "With Honors · Grade 7",
  "Academic Distinction · Grade 8",
  "With High Honors · Grade 9",
  "Outstanding Student · Grade 10",
  "With High Honors · Grade 11",
  "Graduation Honors · Grade 12",
]

const otherTitles = [
  "Leadership Excellence",
  "Community Service Award",
  "Outstanding Club Officer",
  "Best in Visual Presentation",
  "Youth Volunteer Recognition",
  "Creative Achievement Award",
]

const journalismTitles = [
  "Best Feature Writer",
  "Best News Writer",
  "Best Editorial Writer",
  "Best Headline Writer",
  "Best Layout Artist",
  "Campus Journalist of the Year",
  "Division Press Conference Finalist",
  "Regional Press Conference Delegate",
  "Outstanding School Publication",
  "Best Collaborative Page",
  "Editorial Leadership Award",
  "Journalism Training Recognition",
  "Resource Speaker Citation",
  "Excellence in Campus Journalism",
]

const sections = [
  {
    title: "Honor wall",
    subtitle: "Academic milestones",
    titles: honorTitles,
    imageOffset: 0,
  },
  {
    title: "Other awards",
    subtitle: "Leadership, service & creativity",
    titles: otherTitles,
    imageOffset: 6,
  },
  {
    title: "Journalism awards",
    subtitle: "Writing, press & publication",
    titles: journalismTitles,
    imageOffset: 10,
  },
]

export default function AwardsPage() {
  return (
    <main className="awards-page">
      <header className="awards-nav">
        <Link href="/#past">← Back to portfolio</Link>
        <p>Personal archive · 32 recognitions</p>
      </header>

      <div className="awards-hero">
        <p>Achievements, effort, and the people who helped along the way</p>
        <h1>Awards wall</h1>
        <span>Three rooms · Thirty-two memories</span>
      </div>

      {sections.map((section, sectionIndex) => (
        <section className="award-room" key={section.title}>
          <header>
            <p>0{sectionIndex + 1} / 03</p>
            <div>
              <span>{section.subtitle}</span>
              <h2>{section.title}</h2>
            </div>
            <strong>{String(section.titles.length).padStart(2, "0")} awards</strong>
          </header>

          <div className="awards-grid">
            {section.titles.map((title, awardIndex) => (
              <figure className="award-frame" key={title}>
                <div>
                  <img
                    alt={`Placeholder image for ${title}`}
                    src={
                      awardImages[
                        (section.imageOffset + awardIndex) % awardImages.length
                      ]
                    }
                  />
                  <span>0{awardIndex + 1}</span>
                </div>
                <figcaption>
                  <h3>{title}</h3>
                  <p>
                    {sectionIndex === 2 ? "Journalism archive" : "Personal archive"} ·{" "}
                    Replace with your photo
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
