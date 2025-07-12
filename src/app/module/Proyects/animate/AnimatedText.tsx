"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef, useState } from "react"

export default function SplitText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    document.fonts.ready.then(() => {
      if (!containerRef.current) return

      containerRef.current.style.visibility = "visible"

      const { words } = splitText(
        containerRef.current.querySelector("p")!
      )

      animate(
        words,
        { opacity: [0, 1], y: [13, 0] },
        {
          type: "spring",
          duration: 1,
          bounce: 0,
          delay: stagger(0.05),
        }
      )
    })
  }, [isVisible])

  return (
    <div ref={containerRef}>
      <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200 text-justify">
        {text}
      </p>
      <Stylesheet />
    </div>
  )
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 420px;
        text-align: center;
        visibility: hidden;
      }

      .split-word {
         display: inline-block;
      }
    `}</style>
  )
}
