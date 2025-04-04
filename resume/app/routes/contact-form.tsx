import { ContactForm } from "~/contact-form/contact-form";
import type { Route } from "./+types/contact-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Form" },
    { name: "description", content: "Contact" },
  ];
}

export default function ContactFormRoute() {
  return <ContactForm />;
}
