export function Job() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
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
    </main>
  );
}

const jobs = [
  {
    id: 0,
    jobTitle: 'Lead Front End Developer',
    companyName: 'Robbins-Gioia',
    jobDescription: ['Led front-end development for the Lynx MRO Application, ensuring high performance and maintainability. ',
      'Implement asynchronous programming techniques to optimize data handling and API communication. ',
      'Established code review standards, improving team cross-training and overall code quality.',
      'Conduct software demonstrations for stakeholders and potential customers, enhancing product visibility. '],

  },
  {
    id: 1,
    jobTitle: 'Senior Software Engineer',
    companyName: 'Applied Insight',
    jobDescription: ['Developed dynamic web applications using Angular, improving UI/UX and responsiveness.',
      'Enhanced code quality with Cypress-based integration testing suites. ',
      'Led and participated in agile processes, fostering continuous team improvement.',
      'Designed interactive reports with Plotly, translating complex data into visual insights.'],

  },
  {
    id: 2,
    jobTitle: 'Senior Software Engineer',
    companyName: 'GDIT',
    jobDescription: ['Built and maintained web applications using Spring Framework for enterprise solutions.',
      'Designed and developed RESTful web services, ensuring efficient API integration.',
      'Managed SQL Server and Oracle databases using Hibernate ORM.',
      'Developed Jenkins CI/CD pipelines, automating deployment workflows.'],

  },
  {
    id: 3,
    jobTitle: 'Programmer II',
    companyName: 'Media Box Studios',
    jobDescription: ['Implemented agile methodologies, accelerating team collaboration and project delivery.',
      'Developed mobile applications for Android and iOS, expanding product accessibility.'],
  },
  {
    id: 4,
    jobTitle: 'Software Developer',
    companyName: 'Rosetta Stone',
    jobDescription: ['Designed and developed mobile application components for live video tutoring platforms.',],

  },
  {
    id: 5,
    jobTitle: 'Web Developer',
    companyName: 'James Madison University',
    jobDescription: ['Managed and updated web content, enhancing site performance and usability.'],

  },
]
