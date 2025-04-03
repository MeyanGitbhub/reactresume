import { Job, type JobItem } from "~/job/job";
import { ResumeIntro } from "~/resume-intro/resume-intro";
import { useState } from "react";

export function ResumePage() {
  const name = 'B.J. Wright';
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <p className="leading-6 text-3xl text-gray-700 dark:text-gray-200 text-center" >
          {name}
        </p>
        <div className="w-full space-y-6 px-4 max-w-7xl">
          <ResumeIntro></ResumeIntro>
        </div>
        <div className="w-full space-y-6 px-4 max-w-7xl">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4 ">
            {jobs.map((job) => (
              <Job job={job} key={job.id} />
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}


const jobs: JobItem[] = [
  {
    id: 0,
    jobTitle: 'Front End Lead Engineer',
    companyName: 'Robbins-Gioia',
    jobDescription: ['Built front end from ground up allowing Robbins-Gioia to increase customer base by selling a commercial MRO product. ',
      'Reduced defects by 30% by utilizing integration tests for front end modules.',
      'Led team of developers, where I set standards, and performed code reviews to create consistent, working software.',
      'Selected as a High Performing Employee, created a plan to utilize Machine Learning in MRO products.  '],

  },
  {
    id: 1,
    jobTitle: 'Cloud Developer',
    companyName: 'Applied Insight',
    jobDescription: ['Created Reports module utilizing data frameworks such as Plotly to allow customers to visualize and quickly analyze critical data points. ',
      'Delivered 3 major modules for application on time, writing over 40% of the source code.',
      'Led and participated in agile processes, fostering continuous team improvement.',
      'Implemented CI/CD pipelines and automated deployment workflows using Jenkins and GitHub Actions, enhancing development efficiency across multiple platforms.'],

  },
  {
    id: 2,
    jobTitle: 'Senior Software Engineer',
    companyName: 'GDIT',
    jobDescription: ['Built and designed micro service applications that interface with multiple front ends.',
      'Took ownership of full stack application refactoring legacy systems and creating new applications to meet customer requirements. ',
      'Managed SQL Server and Oracle databases using Hibernate ORM.',
      'Designed and developed RESTful web services, ensuring efficient API integration. '],

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
    jobDescription: [' Developed and debugged Rosetta Stone Studio video tutoring system. ', 'Wrote and Tested software that transitioned Rosetta Stone from CD product to Online Tutoring System. '],

  },
  {
    id: 5,
    jobTitle: 'Web Developer',
    companyName: 'James Madison University',
    jobDescription: ['Managed and updated web content, enhancing site performance and usability.'],

  },
]