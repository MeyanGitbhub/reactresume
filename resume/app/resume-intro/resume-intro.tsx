

export function ResumeIntro() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
             {introduction}
            </p>
      </div>
    </main>
  );
}

const introduction = "Experienced Senior Software Engineer with a strong background in front-end development, RESTful API integration, and agile methodologies. Passionate about building scalable web applications and improving development processes through code quality, testing, and team collaboration. Proven ability to lead teams, establish best practices, and deliver high-impact solutions. ";