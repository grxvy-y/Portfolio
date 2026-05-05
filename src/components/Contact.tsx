import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

/*
 * Contact Component
 * Displays a final call-to-action section at the bottom of the page
 * where visitors can reach out via email or LinkedIn.
 */
export default function Contact() {
  return (
    // We use a light gray background to differentiate this from the footer.
    // overflow-hidden prevents the blurred background blobs from causing horizontal scrollbars.
    <section id="contact" className="py-24 bg-gray-50 relative z-10 overflow-hidden transition-opacity duration-1000 ease-in opacity-100">
      
      {/* Subtle background decoration (Top Right) */}
      {/* These div elements are purely decorative blobs that blend into the background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 mix-blend-multiply pointer-events-none"></div>
      
      {/* Subtle background decoration (Bottom Left) */}
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-40 mix-blend-multiply pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        
        {/* We center all text in this div */}
        <div className="text-center">

          {/* Contact Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 relative z-10">
            Let's Connect
          </h2>
          
          {/* Contact Description */}
          {/* max-w-2xl ensures the text doesn't stretch too far across wide screens */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
            I'm currently open to new opportunities, collaborations, and conversations. 
            Whether you have a question about a project, want to discuss a potential role, 
            or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          {/* Buttons Container */}
          {/* Flexbox stacks buttons on mobile (flex-col) and puts them side-by-side on desktop (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            
            {/* Email Button */}
            <a
              href="mailto:yeepaulchristian@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-transform duration-300 hover:scale-105 w-full sm:w-auto shadow-md"
            >
              <FaEnvelope className="w-4 h-4" />
              Get in Touch
            </a>
            
            {/* LinkedIn Button */}
            {/* Target _blank opens the link in a new tab */}
            <a
              href="https://www.linkedin.com/in/paul-christian-yee-909048231/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#0A66C2] text-white rounded-xl text-sm font-semibold hover:bg-[#004182] transition-transform duration-300 hover:scale-105 w-full sm:w-auto shadow-md"
            >
              <FaLinkedin className="w-4 h-4" />
              Connect on LinkedIn!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
