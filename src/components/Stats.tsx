

/*
 * Stats Array
 * Contains the data for our mini-achievements section.
 * Storing it in an array makes it easy to map over and render each item.
 */
const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '2', label: 'Years Experience' },
  { value: '3+', label: 'Technologies Mastered' },
  { value: '∞', label: 'Aura' },
]

/*
 * Stats Component
 * This section displays a quick overview of accomplishments using a grid layout.
 */
export default function Stats() {
  return (
    // Outer section spans the full width of the screen with a light gray background
    <section className="w-full bg-gray-50/50 border-y border-gray-100 relative z-10 mb-24 transition-opacity duration-1000 ease-in opacity-100">
      
      {/* Inner container limits the maximum width and centers the content */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-10 sm:py-12">
        
        {/* We use a grid layout to display the stats side-by-side. 
            It shows 2 columns on mobile, and 4 columns on larger screens. */}
        <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-4 text-center">
          
          {/* Map through the stats array to render each individual stat item */}
          {stats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="flex flex-col gap-y-1 items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gray-100/50 rounded-lg p-4"
            >
              {/* Stat Value (Number or Icon) */}
              {/* order-first ensures the value stays above the label in the flex column layout */}
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center items-center h-10 sm:h-12">
                {stat.value}
              </dd>
              
              {/* Stat Label */}
              {/* uppercase and tracking-widest (letter-spacing) gives it a clean, modern look */}
              <dt className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
