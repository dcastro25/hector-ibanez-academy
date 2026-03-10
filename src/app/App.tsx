
import { DesktopNavbar } from '../components/layout/PublicNavbar/DesktopNavbar'
import { MobileMenu } from '../components/layout/PublicNavbar/MobileMenu'
import About from '../features/home/components/About'
import CourseSection from '../features/home/components/Course'
import { Hero } from '../features/home/components/Hero'
import { HeroMobile } from '../features/home/components/HeroMobile'

function App() {

  return (
    <div className="min-h-screen h-auto bg-bgPrimary pb-20 font-sans">
      <DesktopNavbar/>
      <MobileMenu/>
      <main>
        <HeroMobile/>
        <Hero />
        <About/>
        <CourseSection/>
      </main>
    </div>

  )
}

export default App
