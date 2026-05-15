import { useEffect, useState } from 'react'

/*
 * AnimatedScrollbar Component
 * Shows a thin progress bar on the right side of the screen that
 * fills up as the user scrolls down the page.
 * Built with native browser scroll events — no external libraries needed.
 */
export default function AnimatedScrollbar() {
  // Tracks what % of the page has been scrolled (0 to 1)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // This function runs every time the user scrolls
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      // Avoid dividing by zero on short pages
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup: remove the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Background Track */}
      <div className="fixed right-1 top-2 bottom-2 w-1.5 bg-gray-100/50 rounded-full z-[100] backdrop-blur-sm" />

      {/* Animated Thumb — scaleY grows from the top as user scrolls */}
      <div
        className="fixed right-1 top-2 bottom-2 w-1.5 rounded-full z-[100] bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900 shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{
          transform: `scaleY(${scrollProgress})`,
          transformOrigin: 'top',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </>
  )
}
