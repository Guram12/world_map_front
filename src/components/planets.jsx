import './planets.css'
import moon from "../assets/moon.svg"






export default function Planets() {


  return (
    <div id='main_planets_container' >


      <div className='moon_container' >
        <img src={moon} alt="moon" className='moon' />
      </div>

      
    </div>

  )
}