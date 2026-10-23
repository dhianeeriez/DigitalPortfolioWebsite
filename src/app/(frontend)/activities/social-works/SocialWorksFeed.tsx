"use client"

import Link from "next/link"
import { useState } from "react"

const posts = [
  {
    title: "Donation drives",
    location: "Community outreach · Field notes",
    images: [
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1615897570286-da936a5dfb81?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1644726270363-e746b37b482b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1588822534638-028d5ddc07ac?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1608822101624-23542c56db89?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1786719664235-78cb91943275?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1785595480867-2d0c7eb738b4?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1609139003551-ee40f5f73ec0?auto=format&fit=crop&w=1400&q=85",
    ],
    alt: "Donation drive volunteers and community supplies",
    caption:
      "Small contributions became a shared effort. We collected, sorted, packed, and delivered essentials with the belief that care is strongest when it becomes practical.",
    likes: 184,
  },
  {
    title: "Lifeskill and leadership training",
    location: "Youth workshop · Learning together",
    images: [
      "https://images.unsplash.com/photo-1598015132635-131afe3ba07f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1542323228-002ac256e7b8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1740208376134-67da8e85ccf3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1565350897149-38dfafa81d83?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1669025460993-c3fe20e9dac9?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1702047109910-43af92894dc1?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1646579886741-12b59840c63f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1551677598-3e9000c495f9?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1785123059195-13accd32839b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1683109944202-e74e2adbc8cf?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1717231857718-ae2e9c34e04c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1700939460432-c1b87be0f59c?auto=format&fit=crop&w=1400&q=85",
    ],
    alt: "Leadership and life skills workshop participants",
    caption:
      "A hands-on day about communication, decision-making, and leading with empathy. The best lesson: leadership starts by making room for other voices.",
    likes: 231,
  },
]

export default function SocialWorksFeed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [slideIndexes, setSlideIndexes] = useState([0, 0])
  const [touchStart, setTouchStart] = useState<{
    postIndex: number
    x: number
  } | null>(null)

  const toggleLike = (index: number) => {
    setLikedPosts((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    )
  }

  const moveSlide = (postIndex: number, nextIndex: number) => {
    const maxIndex = posts[postIndex].images.length - 1
    const clampedIndex = Math.max(0, Math.min(nextIndex, maxIndex))

    setSlideIndexes((current) =>
      current.map((value, index) =>
        index === postIndex ? clampedIndex : value,
      ),
    )
  }

  return (
    <main className="social-feed-page">
      <header className="social-feed-topbar">
        <Link href="/activities">← Activities</Link>
        <div className="social-feed-wordmark">community.log</div>
        <span>02 posts</span>
      </header>

      <div className="social-profile">
        <div className="social-avatar">MV</div>
        <div>
          <h1>Social works</h1>
          <p>People, service, and things worth showing up for.</p>
        </div>
      </div>

      <section className="social-posts" aria-label="Social work posts">
        {posts.map((post, index) => {
          const liked = likedPosts.includes(index)
          return (
            <article className="social-post" key={post.title}>
              <header>
                <div className="social-mini-avatar">MV</div>
                <div>
                  <strong>mara.givesback</strong>
                  <span>{post.location}</span>
                </div>
                <button aria-label="Post menu" type="button">
                  ···
                </button>
              </header>
              <div
                className="social-carousel"
                onTouchEnd={(event) => {
                  if (!touchStart || touchStart.postIndex !== index) return
                  const distance =
                    event.changedTouches[0].clientX - touchStart.x
                  if (Math.abs(distance) > 45) {
                    moveSlide(
                      index,
                      slideIndexes[index] + (distance < 0 ? 1 : -1),
                    )
                  }
                  setTouchStart(null)
                }}
                onTouchStart={(event) =>
                  setTouchStart({
                    postIndex: index,
                    x: event.touches[0].clientX,
                  })
                }
              >
                <div
                  className="social-carousel-track"
                  style={{
                    transform: `translateX(-${slideIndexes[index] * 100}%)`,
                  }}
                >
                  {post.images.map((image, imageIndex) => (
                    <img
                      alt={`${post.alt}, photo ${imageIndex + 1} of 15`}
                      key={image}
                      loading={imageIndex === 0 ? "eager" : "lazy"}
                      src={image}
                    />
                  ))}
                </div>

                <span className="social-slide-count">
                  {slideIndexes[index] + 1} / {post.images.length}
                </span>

                {slideIndexes[index] > 0 && (
                  <button
                    aria-label={`Previous ${post.title} photo`}
                    className="social-carousel-arrow social-carousel-previous"
                    onClick={() =>
                      moveSlide(index, slideIndexes[index] - 1)
                    }
                    type="button"
                  >
                    ‹
                  </button>
                )}
                {slideIndexes[index] < post.images.length - 1 && (
                  <button
                    aria-label={`Next ${post.title} photo`}
                    className="social-carousel-arrow social-carousel-next"
                    onClick={() =>
                      moveSlide(index, slideIndexes[index] + 1)
                    }
                    type="button"
                  >
                    ›
                  </button>
                )}
              </div>

              <div className="social-carousel-dots" aria-label="Photo position">
                {post.images.map((_, imageIndex) => (
                  <button
                    aria-label={`Show photo ${imageIndex + 1}`}
                    aria-pressed={slideIndexes[index] === imageIndex}
                    key={imageIndex}
                    onClick={() => moveSlide(index, imageIndex)}
                    type="button"
                  />
                ))}
              </div>
              <div className="social-actions">
                <button
                  aria-label={liked ? "Unlike post" : "Like post"}
                  className={liked ? "is-liked" : ""}
                  onClick={() => toggleLike(index)}
                  type="button"
                >
                  <span aria-hidden="true">{liked ? "♥" : "♡"}</span>
                </button>
                <span aria-hidden="true">□</span>
                <span aria-hidden="true">↗</span>
                <span className="social-save" aria-hidden="true">◇</span>
              </div>
              <div className="social-caption">
                <strong>{post.likes + (liked ? 1 : 0)} likes</strong>
                <h2>{post.title}</h2>
                <p>
                  <b>mara.givesback</b> {post.caption}
                </p>
                <span>View all 12 comments</span>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
