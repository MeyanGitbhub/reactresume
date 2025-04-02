import { Job } from "~/job/job";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { ResumeIntro } from "~/resume-intro/resume-intro";

export function ResumePage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
          B.J. Wright Resume
        </p>
        <div className="w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <ResumeIntro></ResumeIntro>
          </nav>
        </div>
        <div className="w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <Job></Job>
          </nav>
        </div>
      </div>
    </main>
  );
}

