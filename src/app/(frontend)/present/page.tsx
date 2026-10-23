import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Present — Mara Voss",
  description: "Enrollment notes, present-day studies, and the people held close.",
}

export default function PresentPage() {
  return (
    <main className="present-story-page">
      <header className="present-story-nav">
        <Link href="/#present">← Back to portfolio</Link>
        <p>Present day · Personal archive</p>
      </header>

      <section className="enrollment-story">
        <div className="present-section-heading">
          <p>01 / Enrollment</p>
          <h1>Where I am now.</h1>
        </div>

        <div className="enrollment-layout">
          <div className="detail-id-stage">
            <div className="detail-id-hanger">
              <div className="detail-lanyard" aria-hidden="true" />
              <div className="detail-id-clip" aria-hidden="true" />
              <article className="detail-school-id">
                <header>
                  <div>MV</div>
                  <p>
                    Institute of Visual Arts
                    <span>Student identification</span>
                  </p>
                </header>
                <div className="detail-id-photo">
                  <img
                    alt="Placeholder portrait for the student ID"
                    src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=900&q=85"
                  />
                  <span>Replace with your ID photo</span>
                </div>
                <dl>
                  <div>
                    <dt>Name</dt>
                    <dd>Mara Voss</dd>
                  </div>
                  <div>
                    <dt>Program</dt>
                    <dd>Visual Communication</dd>
                  </div>
                  <div>
                    <dt>Student no.</dt>
                    <dd>MV–2026–041</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>

          <div className="enrollment-paper">
            <span className="paper-tape" aria-hidden="true" />
            <p>Current chapter · Notes to self</p>
            <h2>My enrollment story</h2>
            <label htmlFor="present-notes">Write your text here</label>
            <textarea
              defaultValue="This is where I can write about my present school, my course, and the experiences shaping who I am becoming."
              id="present-notes"
              rows={6}
            />

            <figure className="enrollment-form-slot">
              <span className="form-paperclip" aria-hidden="true" />
              <img
                alt="Placeholder for an enrollment form"
                src="https://images.unsplash.com/photo-1632152133952-98b268dc4b86?auto=format&fit=crop&w=1200&q=85"
              />
              <figcaption>
                Enrollment form · Replace with your document image
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="locket-section">
        <div className="present-section-heading">
          <p>02 / Close to heart</p>
          <h2>The people I carry with me.</h2>
        </div>

        <div className="locket-row">
          <article className="locket-memory locket-memory-one">
            <div className="locket-chain" aria-hidden="true" />
            <div className="locket-hinge" aria-hidden="true" />
            <div className="locket-frame">
              <div className="locket-inner">
                <img
                  alt="Placeholder portrait for the first locket"
                  src="https://images.unsplash.com/photo-1606677549245-b8bb3fd820d4?auto=format&fit=crop&w=900&q=85"
                />
                <span>Replace photo</span>
              </div>
            </div>
            <div className="locket-caption">
              <p>My constant</p>
              <span>
                A place for the person who makes every new chapter feel like
                home.
              </span>
            </div>
          </article>

          <article className="locket-memory locket-memory-two">
            <div className="locket-chain" aria-hidden="true" />
            <div className="locket-hinge" aria-hidden="true" />
            <div className="locket-frame">
              <div className="locket-inner">
                <img
                  alt="Placeholder portrait for the second locket"
                  src="https://images.unsplash.com/photo-1703995886184-8a678fa16980?auto=format&fit=crop&w=900&q=85"
                />
                <span>Replace photo</span>
              </div>
            </div>
            <div className="locket-caption">
              <p>My people</p>
              <span>
                A place for friendship, shared courage, and the memories still
                being made.
              </span>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
