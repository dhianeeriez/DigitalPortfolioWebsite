import type { Metadata } from "next"
import FutureTimeCapsule from "./FutureTimeCapsule"

export const metadata: Metadata = {
  title: "Future Self — Mara Voss",
  description: "A visual time capsule and letter to a future self.",
}

export default function FuturePage() {
  return <FutureTimeCapsule />
}
