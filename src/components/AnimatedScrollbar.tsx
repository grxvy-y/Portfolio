import { motion, useScroll, useSpring } from 'framer-motion'

export default function AnimatedScrollbar() {
  const { scrollYProgress } = useScroll()
  
  // Apply a spring physics effect to the scroll progress for a cool trailing animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Invisible interactive overlay to prevent clicks if needed, though mostly visual */}
      
      {/* Background Track */}
      <div className="fixed right-1 top-2 bottom-2 w-1.5 bg-gray-100/50 rounded-full z-[100] backdrop-blur-sm" />
      
      {/* Animated Thumb */}
      <motion.div
        className="fixed right-1 top-2 bottom-2 w-1.5 rounded-full z-[100] bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900 origin-top shadow-[0_0_8px_rgba(0,0,0,0.4)]"
        style={{ scaleY }}
      />
    </>
  )
}
