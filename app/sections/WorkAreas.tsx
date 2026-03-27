'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileCheck, Database, RefreshCw, BookOpen, BarChart3, Wrench } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: FileCheck,
    title: 'Data Management & Sharing Plans',
    description: 'Review DMSPs for NIH, NSF, NEH, and DOE grants. Help meet funder and journal requirements.',
    color: '#FFD82B',
  },
  {
    icon: Database,
    title: 'Data Management Practices',
    description: 'Advise on data, image, code, and file management. Assist with documentation and naming conventions.',
    color: '#FFC200',
  },
  {
    icon: RefreshCw,
    title: 'Reproducibility',
    description: 'Best practices for creating/sharing code, GitHub workflows, and statistical methods.',
    color: '#FFE95F',
  },
  {
    icon: BookOpen,
    title: 'Data Curation & Repositories',
    description: 'Support researchers depositing data into URRR and finding appropriate repositories.',
    color: '#B7D3FF',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Training and advice on creating and sharing visualizations with various tools.',
    color: '#66A2FF',
  },
  {
    icon: Wrench,
    title: 'Data Tools',
    description: 'Assist with LabArchives, OSF, protocols.io, DMPTool, ICPSR, and BioRender.',
    color: '#FFD82B',
  },
]

export default function WorkAreas() {
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
      className="min-h-screen flex items-center py-20 px-6 relative"
      style={{ backgroundColor: 'rgba(0, 30, 95, 0.2)', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full" style={{ position: 'relative', zIndex: 60 }}>
        <div style={{ color: '#FFC200', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Part [02]
        </div>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>Our Services</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#001E5F',
                  border: '2px solid rgba(255, 216, 43, 0.3)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#FFD82B' }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#E8E8E8' }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}