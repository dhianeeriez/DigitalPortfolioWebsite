"use server"

import { getPayload } from "payload"
import config from "@/payload.config"

export type ContactActionState = {
  status: "idle" | "success" | "error"
  message: string
  errors?: Record<string, string>
}

const projectTypes = ["brand", "digital", "campaign", "other"] as const

function readString(formData: FormData, name: string) {
  const value = formData.get(name)
  return typeof value === "string" ? value.trim() : ""
}

export async function submitContact(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const name = readString(formData, "name")
  const email = readString(formData, "email").toLowerCase()
  const projectType = readString(formData, "projectType")
  const message = readString(formData, "message")
  const website = readString(formData, "website")

  if (website) {
    return {
      status: "success",
      message: "Thank you. I’ll be in touch soon.",
    }
  }

  const errors: Record<string, string> = {}

  if (name.length < 2 || name.length > 120) {
    errors.name = "Please enter your name."
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address."
  }
  if (!projectTypes.includes(projectType as typeof projectTypes[number])) {
    errors.projectType = "Please choose a project type."
  }
  if (message.length < 10 || message.length > 4000) {
    errors.message = "Please share at least a few words about the project."
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
    }
  }

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: "contact-submissions",
      data: {
        name,
        email,
        projectType: projectType as typeof projectTypes[number],
        message,
      },
      draft: false,
      overrideAccess: false,
    })

    return {
      status: "success",
      message: "Thank you. I’ll be in touch soon.",
    }
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
      errors: {},
    }
  }
}
