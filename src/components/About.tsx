import aboutPic from '../assets/Portfolio-Pic.jpeg'

/*
 * About Component
 * This section provides a brief introduction and displays a personal photo.
 * We use a split layout on larger screens (photo on left, text on right).
 */
export default function About() {
  return (
    // The section uses flexbox to center content vertically on the screen
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 lg:px-8 bg-white">
      
      {/* Container to restrict the maximum width of the content */}
      <div className="mx-auto max-w-6xl w-full">

        {/* Header Section */}
        {/* We center the text and add some bottom margin for spacing */}
        <div className="text-center mb-10 transition-opacity duration-700 ease-in opacity-100">
          
          {/* Main heading for the section */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          
          {/* Subtitle text under the heading */}
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            A brief introduction to who I am and what drives my passion for technology.
          </p>
        </div>

        {/* Content Section (Split Layout) */}
        {/* Using CSS Grid to create a responsive two-column layout on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Image Side */}
          <div className="relative w-4/5 lg:w-3/4 mx-auto transition-transform duration-700 hover:scale-105">
            
            {/* Image Wrapper to clip the image to rounded corners and apply shadow */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-gray-100">
              <img
                src={aboutPic}
                alt="Paul Christian Yee"
                loading="lazy"
                className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] object-cover object-top"
              />
            </div>
            
            {/* Decorative background blob behind the image */}
            {/* -z-10 puts it behind the image, blur-2xl makes it look like a glowing shadow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-gray-200 to-gray-400 blur-2xl opacity-30 -z-10 rounded-[3rem]" />
          </div>

          {/* Right Column: Text Side */}
          {/* space-y-6 adds vertical spacing between each paragraph automatically */}
          <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed transition-opacity duration-700 ease-in opacity-100">
            <p>
              Hello! My name is Paul, and I am a passionate Computer Programmer.
              I enjoy bridging the gap between engineering and design, combining my technical
              knowledge with a keen eye for aesthetics.
            </p>
            <p>
              Over the years, I have worked on a variety of projects that have
              allowed me to explore different technologies and frameworks. My goal is to always
              build products that provide intuitive, pixel-perfect user experiences.
            </p>
            <p>
              When I'm not in front of a computer screen, I'm probably exploring
              new hobbies, reading a good book, or enjoying the outdoors. I believe in continuous
              learning and am always looking for the next exciting challenge to tackle.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
