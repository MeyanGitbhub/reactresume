import type { Route } from "../+types/root";
import ResumeReact from "./resume-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "B.J. Wright React Resume" },
    { name: "description", content: "React Resume" },
  ];
}

export default function Home() {
  return <ResumeReact />;
}
