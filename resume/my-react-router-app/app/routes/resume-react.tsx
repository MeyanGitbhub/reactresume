import { ResumePage } from "~/resume-page/resume-page";
import type { Route } from "./+types/resume-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Resume" },
    { name: "description", content: "React Resume" },
  ];
}

export default function ResumeReact() {
  return <ResumePage />;
}
