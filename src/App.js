import './App.css'
import Contact from './components/Contact/Contact'
import LeadMagnet from './components/LeadMagnet/LeadMagnet'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Question from './components/Question/Question'
import Social from './components/Social/Social'
import WhyWe from './components/WhyWe/WhyWe'

function App() {
  return (
    <div className="App">
      <Nav />
      <WhyWe />
      <Projects />
      <Contact />
      <Question />

      <LeadMagnet />
      <Social />
    </div>
  )
}

export default App
