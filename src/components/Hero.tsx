import { Mail } from 'lucide-react'
import profilePic from '../assets/Portfolio-PFP.jpeg'

/* 
 * This component renders the LinkedIn icon using a standard SVG.
 * We pass the className prop so we can style it easily with Tailwind CSS later.
 */
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

/*
 * This component renders the GitHub icon.
 * Using inline SVGs reduces the need for external libraries where possible.
 */
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

/* 
 * The Hero component is the main landing section of the website.
 * It contains the profile picture, name, role, and quick links.
 */
export default function Hero() {
  return (
    // The main section is set to take up at least the full screen height (min-h-screen)
    // and uses flexbox to center everything vertically and horizontally.
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
      
      {/* This div wraps all content to keep it in a column and centered */}
      <div className="mx-auto max-w-3xl text-center flex flex-col items-center transition-opacity duration-1000 ease-in opacity-100">
        
        {/* Profile Picture Section */}
        {/* Standard CSS animation can be used instead of heavy framer-motion library */}
        <div className="mb-8 relative transition-transform duration-500 hover:-translate-y-2">
          
          {/* This wrapper creates the circle shape and gradient border for the profile picture */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-gray-200 to-gray-400 shadow-xl overflow-hidden">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
          
          {/* A subtle glowing background effect behind the image */}
          <div className="absolute inset-0 bg-gray-400 blur-2xl opacity-20 -z-10 rounded-full" />
        </div>

        {/* Main Heading for Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-2 transition-all duration-300">
          Paul Christian Yee
        </h1>

        {/* Subtitle for Job Title */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-500 mb-6 transition-all duration-300">
          Computer Programmer
        </h2>

        {/* Brief Introduction Paragraph */}
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl transition-all duration-300">
          I'm a passionate developer focused on crafting clean, user-friendly experiences. 
          I love transforming complex problems into elegant, intuitive designs and robust code.
        </p>

        {/* Call to Action Buttons */}
        {/* We use standard anchor tags styled as buttons to link out */}
        <div className="flex items-center gap-4 mb-12">
          {/* Work/Portfolio Button */}
          <a
            href="https://github.com/grxvy-y"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            Work
          </a>
          
          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Social Media Links Container */}
        {/* Flex row to line the icons up horizontally with gaps between them */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/paul-christian-yee-909048231/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/grxvy-y"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:yeepaulchristian@gmail.com"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  )
}
