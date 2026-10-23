import type { Metadata } from "next"
import EducationNotebook from "./EducationNotebook"

export const metadata: Metadata = {
  title: "My Education — Mara Voss",
  description: "A scrapbook journal tracing Mara Voss's education.",
}

export default function EducationPage() {
  return <EducationNotebook />
}
