import type { Metadata } from "next"
import ProjectLinksPaper from "../ProjectLinksPaper"

export const metadata: Metadata = {
  title: "Competition Outputs — Mara Voss",
}

export default function CompetitionOutputsPage() {
  return (
    <ProjectLinksPaper
      eyebrow="Project 02 · Output archive"
      links={[
        {
          label: "Quiz bee archive",
          description: "See the TLE Quiz Bee highlights from 2018 and 2019.",
          href: "/activities/quiz-bees",
        },
        {
          label: "Journalism competitions",
          description: "Read the competition chapter in the newspaper archive.",
          href: "/activities/journalism",
        },
        {
          label: "Awards wall",
          description: "Browse academic, community, and journalism recognition.",
          href: "/awards",
        },
        {
          label: "Activities directory",
          description: "Explore all extracurricular projects and experiences.",
          href: "/activities",
        },
      ]}
      note="A collected index of pieces produced under pressure, prepared for competition, and carried forward as practice."
      title="Competition outputs"
      variant="competition"
    />
  )
}
