
import { DesktopNavbar } from '../components/layout/PublicNavbar/DesktopNavbar'
import { MobileMenu } from '../components/layout/PublicNavbar/MobileMenu'
import { Hero } from '../features/home/components/Hero'

function App() {

  return (
    <div className="min-h-screen h-300 bg-bgPrimary">
      <DesktopNavbar/>
      <MobileMenu/>
      <main>
        <Hero />
      </main>
    </div>

  )
}

export default App
