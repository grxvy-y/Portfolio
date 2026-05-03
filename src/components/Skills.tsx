import {
  SiPython, SiTypescript, SiJavascript, SiHtml5, SiCss, SiGnubash,
  SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiDotnet, SiPhp,
  SiPostgresql, SiSqlite, SiSupabase
} from 'react-icons/si'
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa'
import { TbSql, TbBrandCSharp } from 'react-icons/tb'
import { GrOracle } from 'react-icons/gr'

/*
 * skillCategories Array
 * This array holds all of our skills data grouped by category.
 * By keeping the data separated from the UI code, it's much easier to add
 * or remove skills later without having to dig through complex HTML/JSX.
 */
const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C#", icon: TbBrandCSharp, color: "text-purple-600" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss, color: "text-blue-500" },
      { name: "SQL", icon: TbSql, color: "text-gray-600" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
      { name: "Bash", icon: SiGnubash, color: "text-gray-800" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "ASP.NET", icon: SiDotnet, color: "text-purple-500" },
    ]
  },
  {
    title: "Database Cloud",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "SQLite", icon: SiSqlite, color: "text-blue-300" },
      { name: "pgAdmin", icon: FaDatabase, color: "text-blue-600" },
      { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
      { name: "Oracle", icon: GrOracle, color: "text-red-600" },
      { name: "AWS", icon: FaAws, color: "text-orange-400" },
    ]
  }
]

/*
 * Skills Component
 * Maps over the skillCategories array to render grouped grids of technical skills.
 */
export default function Skills() {
  return (
    // Outer section wrapper with padding top and bottom (py-24)
    <section id="skills" className="py-24 bg-white">
      
      {/* Container to center content and restrict maximum width */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header section for the Technical Skills title */}
        <div className="text-center mb-16 transition-opacity duration-700 ease-in opacity-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, including programming languages, frameworks, and cloud database solutions.
          </p>
        </div>

        {/* Main wrapper for all the skill categories */}
        {/* space-y-16 adds consistent vertical space between each category block */}
        <div className="space-y-16">
          
          {/* We use .map() to loop over each category object in the array */}
          {skillCategories.map((category) => (
            
            // Each category needs a unique 'key' prop in React
            <div key={category.title} className="transition-opacity duration-700 ease-in opacity-100">
              
              {/* Category Title Header */}
              {/* Flexbox centers the title perfectly */}
              <div className="flex justify-center mb-6">
                <h3 className="text-sm md:text-base font-medium text-gray-500 uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>
              
              {/* Skill Cards Container */}
              {/* flex-wrap ensures that if there are too many items, they wrap to the next line nicely */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                
                {/* Loop over each individual skill inside the current category */}
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    // These classes build the "card" for each skill and add a hover transition effect
                    className="w-[80px] sm:w-[100px] flex flex-col items-center justify-center p-2 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 group"
                  >
                    {/* Render the icon component passed from the data array */}
                    {/* group-hover applies an upward shift effect (-translate-y-1) when hovering over the card */}
                    <skill.icon className={`w-6 h-6 mb-1.5 transition-transform duration-300 group-hover:-translate-y-1 ${skill.color}`} />
                    
                    {/* Skill Name Text */}
                    <span className="text-[10px] sm:text-xs font-medium text-gray-700 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
