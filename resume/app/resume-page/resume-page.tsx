import { Job, type JobItem } from "~/job/job";
import { ResumeIntro } from "~/resume-intro/resume-intro";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export function ResumePage() {
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    console.log('B.J. Wright React Resume useEffect');
    // if render is interupted before fetch is complete use AbortController to cancel request.
    const controller = new AbortController();
    const signal = controller.signal;


    const fetchName = async () => {
      try {
        const result = await getResumeNameData(signal);
        setName(result);
      } catch (error) {
        console.log('error: ', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchName();

    return () => {
      // remove subscriptions
      console.log('Cleanup Function');
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <p className="leading-6 text-3xl text-gray-700 dark:text-gray-200 text-center" >
          {name}
        </p>
        <Link to="/contact">Contact Me</Link>
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

// Fake API call Will always return B.J. Wright, just wanted to test hitting an endpoint.
async function getResumeNameData(signal: AbortSignal): Promise<string> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", { signal });
  const data = await response.json();
  console.log('data fetched: ', data);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  if (data.name !== "B.J. Wright") {
    return "B.J. Wright";
  } else {
    return data.name;
  }

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