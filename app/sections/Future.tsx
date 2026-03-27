'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, GraduationCap, Search, Building2, Handshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const initiatives = [
  {
    icon: Globe,
    title: 'Data Curation Network',
    description: 'Proposed inclusion in DCN, a multi-institutional support network for data curators.',
    color: '#FFD82B',
  },
  {
    icon: GraduationCap,
    title: 'Student Opportunities',
    description: 'Expanding student employment and internships focused on data support projects.',
    color: '#FFC200',
  },
  {
    icon: Search,
    title: 'Environmental Scan',
    description: 'Comprehensive library-wide scan of uncataloged or hidden data collections.',
    color: '#FFE95F',
  },
  {
    icon: Building2,
    title: 'Carlson Research Commons',
    description: 'New space redesign with StudioX and Digital Scholarship for increased visibility.',
    color: '#FFD82B',
  },
  {
    icon: Handshake,
    title: 'Research Support Referral',
    description: 'Centralized on-demand support system connecting researchers across the university.',
    color: '#FFC200',
  },
]

export default function Future() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            end: 'top center',
            scrub: 0.5,
          },
          y: 30,
          opacity: 0,
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: '#021BC3', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div style={{ color: '#FFC200', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Part [05]
        </div>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>The Future</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />
        
        <p className="text-lg mb-16 max-w-3xl" style={{ color: '#E8E8E8' }}>
          Looking ahead to new initiatives, projects, and services that will further strengthen our impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: '#003EFF',
                  border: '2px solid rgba(255, 216, 43, 0.4)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${initiative.color}, ${initiative.color}dd)`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#001E5F' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FFD82B' }}>
                  {initiative.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#E8E8E8' }}>
                  {initiative.description}
                </p>
              </div>
            )
          })}
        </div>

        <div 
          className="mt-16 rounded-2xl p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #001E5F, #003EFF)',
          }}
        >
          <p className="text-3xl font-light mb-6 italic" style={{ color: '#FFD82B' }}>
            "Data Services is excited for the next year and beyond and is proud of all it has accomplished."
          </p>
          <p className="text-xl font-semibold" style={{ color: '#FFC200' }}>
            — Matthew, Heather, Sarah, and Daniel
          </p>
        </div>
      </div>
    </section>
  )
}