'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setIsDark(saved === 'true')
      document.documentElement.classList.toggle('dark', saved === 'true')
    }
  }, [])

  const toggle = () => {
    const newValue = !isDark
    setIsDark(newValue)
    localStorage.setItem('darkMode', String(newValue))
    document.documentElement.classList.toggle('dark', newValue)
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{
        backgroundColor: isDark ? '#001E5F' : '#ffffff',
        border: `2px solid ${isDark ? '#FFC200' : '#E8E8E8'}`
      }}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6" style={{ color: '#FFC200' }} />
      ) : (
        <Moon className="w-6 h-6" style={{ color: '#001E5F' }} />
      )}
    </button>
  )
}