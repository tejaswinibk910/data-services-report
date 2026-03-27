'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from '../utils/data.json'

gsap.registerPlugin(ScrollTrigger)

export default function Engagement() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!hasAnimated) {
          setHasAnimated(true)
          
          let count = 0
          const interval = setInterval(() => {
            count += 5
            if (count >= 315) {
              setTotalCount(315)
              clearInterval(interval)
            } else {
              setTotalCount(count)
            }
          }, 20)
        }
      }
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
        <h2 className="font-serif font-bold mb-8 text-center" style={{ color: '#FFD82B', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Engagement Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-16">
          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-sm mb-4" style={{ color: '#66A2FF' }}>Total Engagements</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
              {totalCount}
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-sm mb-4" style={{ color: '#66A2FF' }}>Busiest Month</div>
            <div className="text-3xl font-black" style={{ color: '#FFC200' }}>
              {data.engagement.busiest_month}
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-sm mb-4" style={{ color: '#66A2FF' }}>Top Topic</div>
            <div className="text-2xl font-black" style={{ color: '#FFE95F' }}>
              {data.engagement.top_topic}
            </div>
          </div>

          <div 
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <div className="text-sm mb-4" style={{ color: '#66A2FF' }}>Top Funder</div>
            <div className="text-2xl font-black" style={{ color: '#B7D3FF' }}>
              {data.engagement.top_funder}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Activities by Campus
            </h3>
            
            <div className="flex items-center justify-center mb-6">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {data.engagement.by_campus.map((item, i) => {
                  const prevPercentages = data.engagement.by_campus.slice(0, i).reduce((sum, it) => sum + it.percentage, 0)
                  return (
                    <circle 
                      key={i}
                      cx="100" 
                      cy="100" 
                      r="70" 
                      fill="none" 
                      stroke={item.color} 
                      strokeWidth="40" 
                      strokeDasharray={`${item.percentage * 4.4} 440`} 
                      strokeDashoffset={`-${prevPercentages * 4.4}`} 
                      transform="rotate(-90 100 100)" 
                    />
                  )
                })}
                <circle cx="100" cy="100" r="40" fill="#021BC3" />
              </svg>
            </div>

            <div className="space-y-2">
              {data.engagement.by_campus.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: item.color }}></div>
                    <span style={{ color: '#E8E8E8' }}>{item.name}</span>
                  </div>
                  <span style={{ color: '#FFD82B', fontWeight: 'bold' }}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Activities Per User Type
            </h3>

            <div className="h-64 relative">
              <div className="flex gap-2 mb-2" style={{ height: '45%' }}>
                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#FFD82B',
                    width: '55%'
                  }}
                >
                  <div className="text-black font-bold text-2xl">111</div>
                  <div className="text-black text-xs font-semibold">Staff</div>
                </div>

                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#FFC200',
                    width: '45%'
                  }}
                >
                  <div className="text-black font-bold text-xl">96</div>
                  <div className="text-black text-xs font-semibold text-center px-1">Faculty/Researcher</div>
                </div>
              </div>

              <div className="flex gap-2 mb-2" style={{ height: '28%' }}>
                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#FFE95F',
                    width: '30%'
                  }}
                >
                  <div className="text-black font-bold text-lg">34</div>
                  <div className="text-black text-xs text-center px-1">Community</div>
                </div>

                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#B7D3FF',
                    width: '26%'
                  }}
                >
                  <div className="text-black font-bold text-lg">29</div>
                  <div className="text-black text-xs font-semibold">PhD</div>
                </div>

                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#66A2FF',
                    width: '22%'
                  }}
                >
                  <div className="text-white font-bold text-lg">23</div>
                  <div className="text-white text-xs text-center px-1">Undergrad</div>
                </div>

                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#003EFF',
                    width: '22%'
                  }}
                >
                  <div className="text-white font-bold">17</div>
                  <div className="text-white text-xs text-center px-1">Grad</div>
                </div>
              </div>

              <div className="flex gap-2" style={{ height: '25%' }}>
                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#0066FD',
                    width: '15%'
                  }}
                >
                  <div className="text-white font-bold">3</div>
                  <div className="text-white text-xs text-center">Post</div>
                </div>

                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#001E5F',
                    width: '10%'
                  }}
                >
                  <div className="text-white font-bold text-sm">1</div>
                  <div className="text-white text-xs">Alum</div>
                </div>

                <div 
                  className="rounded flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: '#021BC3',
                    width: '10%'
                  }}
                >
                  <div className="text-white font-bold text-sm">1</div>
                  <div className="text-white text-xs">Other</div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255, 216, 43, 0.05)',
              border: '2px solid rgba(255, 216, 43, 0.2)'
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Activities by Topic
            </h3>

            <div className="space-y-4">
              {data.engagement.by_topic.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span style={{ color: '#E8E8E8', fontSize: '0.75rem' }}>{item.topic}</span>
                    <span style={{ color: '#FFD82B', fontWeight: 'bold', fontSize: '0.75rem' }}>{item.count}</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 216, 43, 0.1)', borderRadius: '3px' }}>
                    <div 
                      className="transition-all duration-1000"
                      style={{
                        width: hasAnimated ? `${(item.count / 45) * 100}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #FFD82B, #FFC200)',
                        borderRadius: '3px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}