'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const teamMembers = [
  {
    name: 'Heather Owen',
    title: 'Data Librarian',
    initials: 'HO',
    spiritAnimal: 'Great Gray Owl',
    description: 'Data Librarian who reviews data management plans, consults on best practices, and leads data literacy initiatives.',
    trait: 'Flies thoughtfully and silently and is very wise',
    birdImage: '/images/owl.jpg',
  },
  {
    name: 'Sarah Siddiqui',
    title: 'Reproducibility Librarian',
    initials: 'SS',
    spiritAnimal: 'Merlin (Petit caporal)',
    description: 'Reproducibility Librarian who recommends tools and best practices for analyzing and sharing methods, workflows, and code.',
    trait: 'Compact, judicious, and level-headed',
    birdImage: '/images/merlin.jpg',
  },
  {
    name: 'Matthew Mariner',
    title: 'Data Curator Librarian',
    initials: 'MM',
    spiritAnimal: 'Anhinga',
    description: 'Data Curator Librarian managing URRR, ensuring thorough curation of all submitted data.',
    trait: 'Rather awkward on land, but flies gracefully through water',
    birdImage: '/images/anhinga.jpg',
  },
  {
    name: 'Daniel Castillo',
    title: 'Somerville Director',
    initials: 'DC',
    spiritAnimal: 'Columbian Hummingbird',
    description: 'Director of Science & Engineering Libraries and Research Initiatives, leading the Data Services team.',
    trait: 'Busy and quick-moving',
    birdImage: '/images/hummingbird.jpg',
  },
]

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const photosRef = useRef<HTMLDivElement[]>([])

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

      photosRef.current.forEach((photo) => {
        gsap.from(photo, {
          scrollTrigger: {
            trigger: photo,
            start: 'top bottom-=50',
            end: 'top center',
            scrub: 0.5,
          },
          x: -30,
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
      style={{ backgroundColor: 'rgba(0, 30, 95, 0.5)', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 60 }}>
        <div style={{ color: '#FFC200', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Part [03]
        </div>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>The Team</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Group Photos */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div
              ref={(el) => {
                if (el) photosRef.current[0] = el
              }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(255, 216, 43, 0.3)',
              }}
            >
              <Image
                src="/images/group_1.png"
                alt="Data Services Team - Group Photo 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

            <div
              ref={(el) => {
                if (el) photosRef.current[1] = el
              }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(255, 216, 43, 0.3)',
              }}
            >
              <Image
                src="/images/group_2.png"
                alt="Data Services Team - Group Photo 2"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Team Member Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#001E5F',
                  border: '2px solid rgba(255, 216, 43, 0.3)',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      border: '3px solid #FFD82B',
                    }}
                  >
                    <Image
                      src={member.birdImage}
                      alt={member.spiritAnimal}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#FFD82B' }}>
                      {member.name}
                    </h3>
                    <p className="text-sm" style={{ color: '#FFC200' }}>
                      {member.title}
                    </p>
                  </div>
                </div>

                <p className="text-xs mb-2" style={{ color: '#B7D3FF' }}>
                  <span className="font-semibold">Spirit Animal:</span> {member.spiritAnimal}
                </p>
                <p className="text-sm mb-3" style={{ color: '#E8E8E8' }}>
                  {member.description}
                </p>
                <p className="text-xs italic border-l-2 pl-3" style={{ color: '#66A2FF', borderColor: '#FFD82B' }}>
                  {member.trait}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}