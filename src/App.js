import './App.css'
import Brief from './components/Brief/Brief'
import Contact from './components/Contact/Contact'
import Hamburger from './components/Hamburger/Hamburger'
import LeadMagnet from './components/LeadMagnet/LeadMagnet'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Question from './components/Question/Question'
import Services from './components/Services/Services'
import Social from './components/Social/Social'
import WhyWe from './components/WhyWe/WhyWe'

function App() {
  return (
    <div className="App">
      <Nav />

      <Main />
      <WhyWe />
      <Services />
      <Projects />
      <Contact />
      <Brief />
      <Question />
      <Social />
      <LeadMagnet />
    </div>
  )
}

export default App
