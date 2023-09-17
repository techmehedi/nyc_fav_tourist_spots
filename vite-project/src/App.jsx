import './App.css'
import nyc from "./assets/nyc.png"
import timessquare from "./assets/timessquare.jpeg"
import met from "./assets/met.jpeg"
import bb from "./assets/bb.jpeg"
import esb from "./assets/esb.jpeg"
import hl from "./assets/hl.jpeg"
import totr from "./assets/totr.jpeg"
import stol from "./assets/stol.jpeg"
import rc from "./assets/rc.jpeg"
import ci from "./assets/ci.jpeg"
import ei from "./assets/ei.jpeg"
import Places from './components/Places'


function App() {

  return (
    <>
    <div className="headimg">
      <img className='nyclogo' src={nyc} alt="" />
      <h1>New York City's favorite tourist spots</h1>
    </div>
    <div className='mainpage'>
      <Places title="Times Sqaure" location="Broadway and 7th Avenue" img={timessquare} />
      <Places title="The Metropolitan Museum of Art" location="59th Street to 110th Street" img={met} />
      <Places title="Brooklyn Bridge" location="New York, Brooklyn, Manhattan" img={bb} />
      <Places title="Empire State Building" location="20 W 34th St" img={esb} />
      <Places title="The High Line" location="30th Street at Hudson Yards" img={hl} />
      <Places title="The top of the Rock" location="30 Rockefeller Plaza" img={totr} />
      <Places title="The statue of Liberty " location="New York, NY 10004" img={stol} />
      <Places title="Rockefellar Center" location="45 Rockefeller Plaza" img={rc} />
      <Places title="Coney Island" location="1208 Surf Avenue" img={ci} />
      <Places title="Ellis Island" location="Upper New York Bay" img={ei} />
    </div>
    </>
  )
}

export default App
