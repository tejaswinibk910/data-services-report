'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counts, setCounts] = useState([0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true)
          
          let count1 = 0
          const timer1 = setInterval(() => {
            count1 += 5
            if (count1 >= 315) {
              setCounts(prev => [315, prev[1], prev[2]])
              clearInterval(timer1)
            } else {
              setCounts(prev => [count1, prev[1], prev[2]])
            }
          }, 20)

          let count2 = 0
          const timer2 = setInterval(() => {
            count2 += 12
            if (count2 >= 708) {
              setCounts(prev => [prev[0], 708, prev[2]])
              clearInterval(timer2)
            } else {
              setCounts(prev => [prev[0], count2, prev[2]])
            }
          }, 20)

          let count3 = 0
          const timer3 = setInterval(() => {
            count3 += 11
            if (count3 >= 643) {
              setCounts(prev => [prev[0], prev[1], 643])
              clearInterval(timer3)
            } else {
              setCounts(prev => [prev[0], prev[1], count3])
            }
          }, 20)
        }
      },
    })

    return () => trigger.kill()
  }, [hasAnimated])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: '#021BC3', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div style={{ color: '#FFC200', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Part [01]
        </div>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>By the Numbers</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#FFD82B' }}>
              {counts[0]}
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              Total Engagements
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#FFC200' }}>
              {counts[1]}
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              Workshop Attendees
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#FFE95F' }}>
              {counts[2]}
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              URRR Deposits
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-6xl font-black mb-4" style={{ color: '#B7D3FF' }}>
              58K
            </div>
            <div className="text-base font-medium" style={{ color: '#E8E8E8' }}>
              Repository Views
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}