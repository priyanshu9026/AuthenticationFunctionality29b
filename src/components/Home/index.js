// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="route">
      <h1 className="home">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default Home
