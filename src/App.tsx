
import './App.css'
import { DesktopNavbar } from './app/layout/public/PublicNavbar/DesktopNavbar'
import { MobileMenu } from './app/layout/public/PublicNavbar/MobileMenu'


function App() {

  return (
    <div className="min-h-screen h-300 bg-bgPrimary">
      <DesktopNavbar/>
      <MobileMenu/>

    </div>

  )
}

export default App
