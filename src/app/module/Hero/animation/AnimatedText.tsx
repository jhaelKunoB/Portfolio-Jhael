"use client"

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function SplitText({text}) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible"

            const { words } = splitText(
                containerRef.current.querySelector("p")!
            )

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )
        })
    }, [])

    return (
        <div ref={containerRef}>
            <p className="mt-4 text-sm lg:text-base text-gray-300 mb-8">
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
                will-change: transform, opacity;
            }
        `}</style>
    )
}
