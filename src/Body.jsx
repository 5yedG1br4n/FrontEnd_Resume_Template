import React from "react";

export default function Body() {
  return (
    <main>
      <div className="flex gap-32 mt-8 mx-auto justify-center">
        <div className="w-1/2 flex flex-col gap-6">
          <section>
            <h2 className="font-Montserrat text-2xl font-bold tracking-wide mb-2">
              Summary
            </h2>
            <p>
              Detail-oriented Front End Developer with more than 3 years
              experience working with HTML, CSS, Javascript, React and Tailwind
              and dedicated to implementing A11Y accessibility practices to
              ensure inclusive user experiences. Highly adept at both
              independent and collaborative projects, with an emphasis on
              landing page and website development.
            </p>
          </section>
          <section>
            <h2 className="font-Montserrat text-2xl font-bold tracking-wide mb-4">
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                HTML
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                CSS
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                JavaScript (ES6+) / JavaScript Libraries
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                React
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                Redux / Redux Toolkit
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                Bootstrap
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                REST APIs
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                Web Performance Optimization (WPO)
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                A11Y accessibility
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                SCRUM and Agile Methodology
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                DOM Manipulation
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                Front End Search Engine Optimization (SEO)
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                UX/UI Assessment
              </li>
              <li className="bg-slate-600 text-slate-100 py-2 px-4 rounded-md">
                Version Control
              </li>
            </ul>
          </section>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <section>
            <h2 className="font-Montserrat text-2xl font-bold tracking-wide mb-2">
              Professional Experience
            </h2>
            <h3 className="font-bold text-xl">
              Front End Developer, EION Technology Pvt.Ltd
            </h3>
            <h4 className="font-bold mb-2">Hyderabad, April 2021 - Present</h4>
            <ul className="list-disc ml-4">
              <li>
                Assisted in the development of client websites and internal
                projects.
              </li>
              <li>
                Converted wireframes and mockups into fully functional web
                pages.
              </li>
              <li>
                Ensured cross-browser compatibility and fixed bugs related to
                UI/UX.
              </li>
              <li>
                Worked closely with the back-end team to integrate APIs and
                services.
              </li>
              <li>
                Ensured all web applications met A11Y accessibility standards
                and best practices.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-Montserrat text-2xl font-bold tracking-wide mb-2">
              Education
            </h2>
            <div className="mb-2">
              <h3 className="text-xl font-bold">MSc in Vehicle Automation</h3>
              <h4>BME, Budapest, Hungary - 2020</h4>
            </div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">
                BTech in Mechanical Engineering
              </h3>
              <h4>JNTUH, Hyderabad, India - 2017</h4>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Diploma in Mechanical Engineering
              </h3>
              <h4>MSBTE, Mumbai, India - 2012</h4>
            </div>
          </section>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="font-Montserrat text-2xl font-bold tracking-wide mb-2">
          Projects
        </h2>
        <h3 className="text-xl mb-1">
          <span className="font-bold">Client:</span> TelemedRX
        </h3>
        <h4 className="mb-1">
          <span className="font-bold">Description:</span> TelemedRx digitizes
          the working of doctors and makes it easy to manage patients through an
          online platform that handles online appointments, patient health
          records, and consultations. The platform currently serves dietician
          and pediatrician modules, with a gynecologist module under
          development.
        </h4>
        <h4 className="mb-1">
          <span className="font-bold">Role:</span> Front End Developer
        </h4>
        <h4 className="mb-1">
          <span className="font-bold">Technologies Used:</span> JavaScript,
          HTML, CSS, React, RESTful APIs, Git
        </h4>
        <h4 className="font-bold">Responsibilities:</h4>
        <ul className="mb-1 ml-4 list-disc">
          <li>
            Designed and implemented interactive dashboards for doctors and
            patients, enhancing the user interface with React.
          </li>
          <li>
            Developed custom reusable components in React to standardize UI
            elements and improve code maintainability.
          </li>
          <li>
            Integrated third-party libraries and APIs to extend platform
            functionalities, such as real-time chat and notifications.
          </li>
          <li>
            Ensured all health record forms and appointment booking interfaces
            met strict A11Y accessibility standards.
          </li>
          <li>
            Collaborated with the product team to refine requirements and
            deliver features that aligned with business goals and user needs.
          </li>
          <li>
            Utilized advanced CSS techniques to create visually appealing and
            consistent layouts across different modules.
          </li>
          <li>
            Implemented state management using Redux to manage complex state
            across the application efficiently.
          </li>
          <li>
            Conducted regular accessibility audits and implemented improvements
            based on the latest WCAG guidelines.
          </li>
          <li>
            Created comprehensive documentation for front-end features and
            components to facilitate future development and onboarding of new
            team members.
          </li>
          <li>
            Worked on implementing security measures on the front-end to protect
            sensitive patient information.
          </li>
        </ul>
      </section>
    </main>
  );
}
