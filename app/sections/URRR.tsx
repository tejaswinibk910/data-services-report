'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import data from '../utils/data.json'

gsap.registerPlugin(ScrollTrigger)

export default function URRR() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)
  const [counts, setCounts] = useState({ deposits: 0, depositors: 0, views: 0, downloads: 0 })

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center+=100',
      onEnter: () => {
        if (!animated) {
          setAnimated(true)
          
          let dep = 0
          const timer1 = setInterval(() => {
            dep += 11
            if (dep >= 643) {
              setCounts(prev => ({ ...prev, deposits: 643 }))
              clearInterval(timer1)
            } else {
              setCounts(prev => ({ ...prev, deposits: dep }))
            }
          }, 20)

          let depo = 0
          const timer2 = setInterval(() => {
            depo += 1
            if (depo >= 58) {
              setCounts(prev => ({ ...prev, depositors: 58 }))
              clearInterval(timer2)
            } else {
              setCounts(prev => ({ ...prev, depositors: depo }))
            }
          }, 30)

          let v = 0
          const timer3 = setInterval(() => {
            v += 1000
            if (v >= 58709) {
              setCounts(prev => ({ ...prev, views: 58709 }))
              clearInterval(timer3)
            } else {
              setCounts(prev => ({ ...prev, views: v }))
            }
          }, 20)

          let d = 0
          const timer4 = setInterval(() => {
            d += 400
            if (d >= 21865) {
              setCounts(prev => ({ ...prev, downloads: 21865 }))
              clearInterval(timer4)
            } else {
              setCounts(prev => ({ ...prev, downloads: d }))
            }
          }, 20)
        }
      }
    })

    return () => trigger.kill()
  }, [animated])

  const maxViewCount = Math.max(...data.urrr.views_by_type.map(item => item.count))

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center py-20 px-6 relative"
      style={{ backgroundColor: 'rgba(0, 30, 95, 0.5)', position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-6xl mx-auto w-full" style={{ position: 'relative', zIndex: 60 }}>
        <h2 className="font-serif font-bold mb-8 text-center" style={{ color: '#FFD82B', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          URRR Repository
        </h2>
        
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto" style={{ color: '#B7D3FF' }}>
          The University of Rochester Research Repository serves as the institution's repository for scholarly materials
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>TOTAL DEPOSITS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>{counts.deposits}</div>
          </div>
          
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>DEPOSITORS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>{counts.depositors}</div>
          </div>
          
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>TOTAL VIEWS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
              {counts.views.toLocaleString()}
            </div>
          </div>
          
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <div className="text-sm mb-2" style={{ color: '#66A2FF' }}>DOWNLOADS</div>
            <div className="text-5xl font-black" style={{ color: '#FFD82B' }}>
              {counts.downloads.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Views by Item Type
            </h3>

            <div className="space-y-3">
              {data.urrr.views_by_type.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <span style={{ color: '#B7D3FF', fontSize: '0.75rem' }}>{item.type}</span>
                    <span style={{ color: '#FFD82B', fontWeight: 'bold', fontSize: '0.75rem' }}>
                      {item.count > 1000 ? `${(item.count / 1000).toFixed(1)}k` : item.count}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(95, 195, 195, 0.1)', borderRadius: '4px' }}>
                    <div 
                      className="transition-all duration-1000"
                      style={{
                        width: animated ? `${(item.count / maxViewCount) * 100}%` : '0%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #5FC3C3, #4A9D9D)',
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="rounded-2xl p-8"
            style={{
              backgroundColor: '#001E5F',
              border: '2px solid rgba(255, 216, 43, 0.3)'
            }}
          >
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#FFD82B' }}>
              Uploads by Item Type
            </h3>

            <div className="flex items-center justify-center mb-6">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {data.urrr.uploads_by_type.map((item, i) => {
                  const prevPercentages = data.urrr.uploads_by_type.slice(0, i).reduce((sum, it) => sum + it.percentage, 0)
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
                <circle cx="100" cy="100" r="40" fill="#001E5F" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs">
              {data.urrr.uploads_by_type.slice(0, 10).map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div style={{ width: '8px', height: '8px', borderRadius: '2px', backgroundColor: item.color, flexShrink: 0 }}></div>
                  <span style={{ color: '#E8E8E8', fontSize: '0.65rem' }}>{item.type}</span>
                  <span style={{ color: '#FFD82B', fontWeight: 'bold', fontSize: '0.65rem', marginLeft: 'auto' }}>
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}