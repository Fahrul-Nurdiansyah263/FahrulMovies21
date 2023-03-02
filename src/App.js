import Intro from "./components/Intro"
import './App.css';
import NavigationBar from "./components/NavigationBar"
import Trending from "./components/Trending"
import "./style/landingpage.css"
import Superhero from "./components/Superhero"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <NavigationBar/>
      </div>
      {/* end of section */}
      <div className="Intro">
        <Intro/>
      </div>
      {/* trending section */}
      <div className="trending">
        <Trending/>
      </div>
      {/* end of trending section*/}
      <div className="Superhero">
        <Superhero/>
      </div>
    </div>
  )
}

export default App;
