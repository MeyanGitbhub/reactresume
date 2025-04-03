export function Job({ jobs }: { jobs: JobItem[] }) {
  return (
    <div className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        {jobs.map(({ id, jobTitle, companyName, jobDescription}) => (
          <div className="max-w-[700px] w-full space-y-6 px-4" key={jobTitle + "-" + id}>
            <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
              <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                {jobTitle} | {companyName}
              </p>
              <div> </div>
              <ul>
                <div>
                  <div>
                    {jobDescription.map((jobDescription, i) =>
                      <li className="mb-2" key={jobTitle + '-' +  i}>
                        {jobDescription}
                      </li>
                    )}
                  </div>
                </div>

              </ul>
            </nav>
          </div>
        ))}

      </div>
    </div>
  );
}



export interface JobItem {
  id: number; 
  jobTitle: string;
  companyName: string;
  jobDescription: string[];
}