import type { Metadata } from "next"
import ProjectLinksPaper from "../ProjectLinksPaper"

export const metadata: Metadata = {
  title: "The Pinetree — Mara Voss",
}

export default function ThePinetreePage() {
  return (
    <ProjectLinksPaper
      eyebrow="Project 01 · Publication archive"
      links={[
        {
          label: "Journalism archive",
          description: "Open the five-edition newspaper and reporting history.",
          href: "/activities/journalism",
        },
        {
          label: "Journalism awards",
          description: "Browse writing, press, and publication recognitions.",
          href: "/awards",
        },
        {
          label: "Extracurricular activities",
          description: "Return to journalism, social works, and quiz bees.",
          href: "/activities",
        },
        {
          label: "Start a conversation",
          description: "Reach out about publication, editorial, or design work.",
          href: "/#contact",
        },
      ]}
      note="A working index for issues, stories, editorial work, and the people behind the school paper."
      title="The Pinetree"
      variant="pinetree"
    />
  )
}
