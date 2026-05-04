import { useState } from 'react'
import { FaBook, FaGlobe, FaShieldAlt, FaCode } from 'react-icons/fa'

/*
 * This type definition restricts the categories to exactly these three strings.
 * This prevents typos later in the code when setting the filter.
 */
type ProjectCategory = 'All' | 'Personal' | 'School';

/*
 * Projects Array
 * This contains all the data for the projects shown in the portfolio.
 * We store it here so the UI code below remains clean and easy to read.
 */
const projects = [
  {
    id: 1,
    title: 'Bookit',
    description: 'A comprehensive booking management system designed for ease of use and efficient scheduling.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    category: 'School',
    github: 'https://github.com/grxvy-y/2154-Bookit.git',
    icon: FaBook
  },
  {
    id: 2,
    title: '.NET Web Page',
    description: 'A robust web application built with ASP.NET Core architecture, demonstrating backend logic and routing.',
    tech: ['C#', 'ASP.NET', 'SQL Server'],
    category: 'School',
    github: 'https://github.com/grxvy-y/ASP.NET.git',
    icon: FaGlobe
  },
  {
    id: 3,
    title: 'Port Scanner',
    description: 'A lightweight and fast network port scanner script built to identify open ports and services on target hosts.',
    tech: ['Python', 'Socket', 'Networking'],
    category: 'School',
    github: 'https://github.com/grxvy-y/Simple_PortScanner.git',
    icon: FaShieldAlt
  },
  {
    id: 4,
    title: 'Test Cases',
    description: 'A foundational programming assignment demonstrating core logic concepts and problem-solving skills.',
    tech: ['Java', 'Algorithms', 'Data Structures'],
    category: 'School',
    github: 'https://github.com/grxvy-y/COMP2152_Assignment-1.git',
    icon: FaCode
  }
];

/*
 * Projects Component
 * Renders a grid of project cards with category filtering.
 */
export default function Projects() {
  // useState hook keeps track of the currently selected category filter.
  // By default, we want to show 'All' projects.
  const [filter, setFilter] = useState<ProjectCategory>('All');

  /*
   * Filter the projects array based on the selected category.
   * If 'All' is selected, it returns every project.
   */
  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    // Gray background to slightly separate this section from the white About section above it
    <section id="projects" className="py-24 bg-gray-50/50 relative z-10 transition-opacity duration-1000 ease-in opacity-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header and Filter Buttons Container */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 transition-all duration-500">
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          {/* flex-wrap ensures buttons wrap to the next line on smaller screens */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

            {/* Map over the 3 possible categories to create a button for each */}
            {['All', 'Personal', 'School'].map((category) => (
              <button
                key={category}
                // When clicked, update the state to the new category
                onClick={() => setFilter(category as ProjectCategory)}
                // Dynamic class styling: if it's the active filter, style it dark, otherwise light
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === category
                    ? 'bg-gray-900 text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 3x3 Projects Grid */}
        {/* CSS Grid creates 1 column on mobile, 2 on tablets, and 3 on large desktop screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Map through ONLY the filtered projects and render a card for each */}
          {filteredProjects.map((project) => (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              // Card styling with hover transition effects
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group cursor-pointer hover:-translate-y-1"
            >
              {/* Card Header: Icon & Title */}
              <div className="flex items-center gap-4 mb-6">

                {/* Icon wrapper with hover effects inherited from the parent 'group' class */}
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:scale-110 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <project.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>

              {/* Card Description */}
              {/* flex-grow pushes the footer down so all cards in a row are equal height */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              {/* Card Footer: Tech Stack Badges */}
              <div className="space-y-6 mt-auto">
                <div className="flex flex-wrap gap-2">

                  {/* Loop through the technologies used for this specific project */}
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold uppercase tracking-wider rounded-lg border border-gray-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Fallback message if a category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 transition-opacity duration-300">
            No projects found in this category yet.
          </div>
        )}

      </div>
    </section>
  )
}
