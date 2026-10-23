import type { Access, CollectionConfig, FieldAccess } from "payload"

const isPayloadAdmin: Access = ({ req }) => req.user?.collection === "admins"
const isPayloadAdminField: FieldAccess = ({ req }) =>
  req.user?.collection === "admins"

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  access: {
    create: () => true,
    delete: isPayloadAdmin,
    read: isPayloadAdmin,
    update: isPayloadAdmin,
  },
  admin: {
    group: "Inbox",
    useAsTitle: "email",
    defaultColumns: ["name", "email", "projectType", "status", "createdAt"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      maxLength: 120,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "projectType",
      type: "select",
      required: true,
      options: [
        { label: "Brand direction", value: "brand" },
        { label: "Digital experience", value: "digital" },
        { label: "Campaign or editorial", value: "campaign" },
        { label: "Something else", value: "other" },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      minLength: 10,
      maxLength: 4000,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      access: {
        create: isPayloadAdminField,
        update: isPayloadAdminField,
      },
      options: [
        { label: "New", value: "new" },
        { label: "In progress", value: "in-progress" },
        { label: "Replied", value: "replied" },
        { label: "Archived", value: "archived" },
      ],
    },
  ],
}
