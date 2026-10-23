import type { Metadata } from "next"
import JournalismNewspaper from "./JournalismNewspaper"

export const metadata: Metadata = {
  title: "Journalism — Mara Voss",
  description: "A five-page newspaper archive of Mara Voss's journalism work.",
}

export default function JournalismPage() {
  return <JournalismNewspaper />
}
