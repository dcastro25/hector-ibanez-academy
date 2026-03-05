
import { DesktopNavbar } from '../components/layout/PublicNavbar/DesktopNavbar'
import { MobileMenu } from '../components/layout/PublicNavbar/MobileMenu'
import { Hero } from '../features/home/components/Hero'
import { HeroMobile } from '../features/home/components/HeroMobile'

function App() {

  return (
    <div className="min-h-screen h-300 bg-bgPrimary">
      <DesktopNavbar/>
      <MobileMenu/>
      <main>
        <HeroMobile/>
        <Hero />
      </main>
    </div>

  )
}

export default App
