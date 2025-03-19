import { ResumePage } from "~/resume-page/resume-page";
import type { Route } from "./+types/resume-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ResumeReact() {
  return <ResumePage />;
}
