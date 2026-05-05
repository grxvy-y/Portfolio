import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

/*
 * Footer Component
 * Displayed at the very bottom of every page. Contains copyright info, 
 * quick navigation links, and social media icons.
 */
export default function Footer() {
  // We use JavaScript's Date object to automatically get the current year.
  // This way, the copyright year never gets outdated!
  const currentYear = new Date().getFullYear();

  return (
    // footer tag for semantic HTML
    // py-12 adds padding on top and bottom
    <footer className="bg-white border-t border-gray-100 py-12 relative z-10 transition-opacity duration-1000 ease-in opacity-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main Footer Content */}
        {/* flex-col on mobile stacks everything vertically, md:flex-row puts them side-by-side on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
          
          {/* ── Left Side: Copyright & Name ── */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Paul Christian Yee</h3>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* ── Center: Navigation Links ── */}
          {/* Quick links back to the main sections of the portfolio */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          {/* ── Right Side: Social Links ── */}
          {/* Flexbox row with gap-4 between each icon */}
          <div className="flex items-center gap-4">
            
            {/* GitHub Link */}
            <a 
              href="https://github.com/grxvy-y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all border border-transparent hover:border-gray-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/paul-christian-yee-909048231/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-all border border-transparent hover:border-blue-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            
            {/* Email Link */}
            <a 
              href="mailto:yeepaulchristian@gmail.com" 
              className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all border border-transparent hover:border-gray-800"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* ── Bottom Subtext ── */}
        {/* A tiny note at the very bottom giving credit to the tech stack used */}
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-xs text-gray-400">
            Designed & Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
