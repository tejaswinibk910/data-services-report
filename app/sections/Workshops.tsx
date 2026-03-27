'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from '../utils/data.json'

gsap.registerPlugin(ScrollTrigger)

export default function Workshops() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)
  const [counts1, setCounts1] = useState({ reg: 0, att: 0, events: 0 })
  const [counts2, setCounts2] = useState({ reg: 0, att: 0, events: 0 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.workshop-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 0.5,
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
      })
    }, sectionRef)

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!animated) {
          setAnimated(true)
          
          let reg1 = 0
          const timer1 = setInterval(() => {
            reg1 += 4
            if (reg1 >= 240) {
              setCounts1(prev => ({ ...prev, reg: 240 }))
              clearInterval(timer1)
            } else {
              setCounts1(prev => ({ ...prev, reg: reg1 }))
            }
          }, 20)

          let att1 = 0
          const timer2 = setInterval(() => {
            att1 += 3
            if (att1 >= 155) {
              setCounts1(prev => ({ ...prev, att: 155 }))
              clearInterval(timer2)
            } else {
              setCounts1(prev => ({ ...prev, att: att1 }))
            }
          }, 20)

          setTimeout(() => {
            let ev1 = 0
            const timer3 = setInterval(() => {
              ev1 += 1
              if (ev1 >= 5) {
                setCounts1(prev => ({ ...prev, events: 5 }))
                clearInterval(timer3)
              } else {
                setCounts1(prev => ({ ...prev, events: ev1 }))
              }
            }, 100)
          }, 200)

          let reg2 = 0
          const timer4 = setInterval(() => {
            reg2 += 8
            if (reg2 >= 468) {
              setCounts2(prev => ({ ...prev, reg: 468 }))
              clearInterval(timer4)
            } else {
              setCounts2(prev => ({ ...prev, reg: reg2 }))
            }
          }, 20)

          let att2 = 0
          const timer5 = setInterval(() => {
            att2 += 4
            if (att2 >= 240) {
              setCounts2(prev => ({ ...prev, att: 240 }))
              clearInterval(timer5)
            } else {
              setCounts2(prev => ({ ...prev, att: att2 }))
            }
          }, 20)

          setTimeout(() => {
            let ev2 = 0
            const timer6 = setInterval(() => {
              ev2 += 1
              if (ev2 >= 12) {
                setCounts2(prev => ({ ...prev, events: 12 }))
                clearInterval(timer6)
              } else {
                setCounts2(prev => ({ ...prev, events: ev2 }))
              }
            }, 100)
          }, 200)
        }
      }
    })

    return () => {
      ctx.revert()
      trigger.kill()
    }
  }, [animated])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6"
      style={{ backgroundColor: '#021BC3', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div style={{ color: '#FFC200', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Part [04]
        </div>
        <h2 className="font-serif font-bold mb-4" style={{ color: '#FFD82B' }}>Workshops & Webinars</h2>
        <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #FFD82B, #FFC200)', marginBottom: '3rem' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div 
            className="workshop-card rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#FFD82B' }}>
              Data Skills Workshop Series
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Total Registered</div>
                <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
                  {counts1.reg}
                </div>
              </div>
              
              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Total Attended</div>
                <div className="text-5xl font-black" style={{ color: '#FFC200' }}>
                  {counts1.att}
                </div>
              </div>
              
              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Average Rating</div>
                <div className="text-5xl font-black" style={{ color: '#FFE95F' }}>
                  {data.workshops.data_skills.rating}
                  <span className="text-2xl" style={{ color: '#E8E8E8' }}>/10</span>
                </div>
              </div>

              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Total Events</div>
                <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
                  {counts1.events}
                </div>
              </div>
            </div>
          </div>

          <div 
            className="workshop-card rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#FFD82B' }}>
              Love Data Month
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Total Registered</div>
                <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
                  {counts2.reg}
                </div>
              </div>
              
              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Total Attended</div>
                <div className="text-5xl font-black" style={{ color: '#FFC200' }}>
                  {counts2.att}
                </div>
              </div>
              
              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Average Rating</div>
                <div className="text-5xl font-black" style={{ color: '#FFE95F' }}>
                  {data.workshops.love_data.rating}
                  <span className="text-2xl" style={{ color: '#E8E8E8' }}>/10</span>
                </div>
              </div>

              <div>
                <div className="text-sm mb-2" style={{ color: '#B7D3FF' }}>Total Events</div>
                <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
                  {counts2.events}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-12 rounded-2xl p-8"
          style={{
            backgroundColor: 'rgba(255, 216, 43, 0.05)',
            border: '2px solid rgba(255, 216, 43, 0.2)'
          }}
        >
          <h3 className="text-xl font-bold mb-8 text-center" style={{ color: '#FFD82B' }}>
            Registration vs Attendance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center" style={{ color: '#FFC200' }}>
                Data Skills Workshop Series
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: '#B7D3FF', fontSize: '0.85rem' }}>Registered</span>
                    <span style={{ color: '#FFD82B', fontWeight: 'bold' }}>240</span>
                  </div>
                  <div style={{ width: '100%', height: '24px', backgroundColor: 'rgba(255, 216, 43, 0.1)', borderRadius: '4px' }}>
                    <div 
                      className="transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{
                        width: animated ? '100%' : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FFD82B, #FFC200)',
                        borderRadius: '4px'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: '#001E5F', fontWeight: 'bold' }}>240</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: '#B7D3FF', fontSize: '0.85rem' }}>Attended</span>
                    <span style={{ color: '#FFC200', fontWeight: 'bold' }}>155</span>
                  </div>
                  <div style={{ width: '100%', height: '24px', backgroundColor: 'rgba(255, 216, 43, 0.1)', borderRadius: '4px' }}>
                    <div 
                      className="transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{
                        width: animated ? `${(155/240) * 100}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FFC200, #FFE95F)',
                        borderRadius: '4px'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: '#001E5F', fontWeight: 'bold' }}>155</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 216, 43, 0.05)' }}>
                <div className="text-xs mb-2" style={{ color: '#66A2FF' }}>Workshop Topics:</div>
                <ul className="text-xs space-y-1" style={{ color: '#E8E8E8' }}>
                  <li>• Visualize with Python</li>
                  <li>• Reproducible Code & Workflows</li>
                  <li>• Cleaning Data with OpenRefine</li>
                  <li>• Excel Efficiency</li>
                  <li>• Sharing Research with URRR</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center" style={{ color: '#FFC200' }}>
                Love Data Month
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: '#B7D3FF', fontSize: '0.85rem' }}>Registered</span>
                    <span style={{ color: '#FFD82B', fontWeight: 'bold' }}>468</span>
                  </div>
                  <div style={{ width: '100%', height: '24px', backgroundColor: 'rgba(255, 216, 43, 0.1)', borderRadius: '4px' }}>
                    <div 
                      className="transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{
                        width: animated ? '100%' : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FFD82B, #FFC200)',
                        borderRadius: '4px'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: '#001E5F', fontWeight: 'bold' }}>468</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: '#B7D3FF', fontSize: '0.85rem' }}>Attended</span>
                    <span style={{ color: '#FFC200', fontWeight: 'bold' }}>240</span>
                  </div>
                  <div style={{ width: '100%', height: '24px', backgroundColor: 'rgba(255, 216, 43, 0.1)', borderRadius: '4px' }}>
                    <div 
                      className="transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{
                        width: animated ? `${(240/468) * 100}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FFC200, #FFE95F)',
                        borderRadius: '4px'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', color: '#001E5F', fontWeight: 'bold' }}>240</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 216, 43, 0.05)' }}>
                <div className="text-xs mb-2" style={{ color: '#66A2FF' }}>Sample Topics:</div>
                <ul className="text-xs space-y-1" style={{ color: '#E8E8E8' }}>
                  <li>• Metadata & Documentation</li>
                  <li>• ORCID Advantage</li>
                  <li>• XR for Data Visualization</li>
                  <li>• Ethics & Governance</li>
                  <li>• Git Good with Data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}