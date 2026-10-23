import Link from "next/link"

type ProjectLink = {
  label: string
  description: string
  href: string
}

type ProjectLinksPaperProps = {
  eyebrow: string
  title: string
  note: string
  links: ProjectLink[]
  variant: string
}

export default function ProjectLinksPaper({
  eyebrow,
  title,
  note,
  links,
  variant,
}: ProjectLinksPaperProps) {
  return (
    <main className={`project-paper-page project-paper-${variant}`}>
      <header className="project-paper-nav">
        <Link href="/#projects">← Back to projects</Link>
        <p>Project archive · Link index</p>
      </header>

      <article className="project-links-sheet">
        <span className="project-paper-tape project-paper-tape-one" aria-hidden="true" />
        <span className="project-paper-tape project-paper-tape-two" aria-hidden="true" />

        <header>
          <p>{eyebrow}</p>
          <h1>{title}</h1>
          <span>{note}</span>
        </header>

        <ol className="project-link-list">
          {links.map((link, index) => (
            <li key={link.label}>
              <Link href={link.href}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{link.label}</h2>
                  <p>{link.description}</p>
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>

        <footer>
          <span>Mara Voss · Project directory</span>
          <span>Updated 2026</span>
        </footer>
      </article>
    </main>
  )
}
