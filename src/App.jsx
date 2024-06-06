import { useState } from 'react'
import './App.css'
import Map from './components/Map'



function App() {


  return (
    <div id='main_app_container' >

      <div style={{ overflow: "hidden" }} >
        {/* <MapComponent /> */}
        <Map />

      </div>
      
    </div>
  )
}

export default App
