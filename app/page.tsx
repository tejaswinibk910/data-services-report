import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Team from './sections/Team'
import WorkAreas from './sections/WorkAreas'
import Workshops from './sections/Workshops'
import Engagement from './sections/Engagement'
import URRR from './sections/URRR'
import Future from './sections/Future'

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <Hero />
      <Stats />
      <WorkAreas />
      <Team />
      <Workshops />
      <Engagement />
      <URRR />
      <Future />
      
      <footer className="py-12 px-6 text-white text-center" style={{ backgroundColor: '#001E5F' }}>
        <p className="text-lg font-semibold mb-2">University of Rochester Libraries</p>
        <p className="text-base">Data Services Team • FY 2024-2025</p>
      </footer>
    </main>
  )
}