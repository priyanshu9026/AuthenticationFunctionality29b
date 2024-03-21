// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="route">
      <h1 className="about">About Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default About
