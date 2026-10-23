import type { Metadata } from "next"
import SocialWorksFeed from "./SocialWorksFeed"

export const metadata: Metadata = {
  title: "Social Works — Mara Voss",
  description: "A social feed documenting donation drives and leadership training.",
}

export default function SocialWorksPage() {
  return <SocialWorksFeed />
}
