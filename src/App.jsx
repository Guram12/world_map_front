import { useState } from 'react'
import './App.css'
import Map from './components/Map'
import Map2 from './components/Map2'
import Map_copy from './components/Map_copy'



function App() {


  return (
    <div id='main_app_container' >
      {/* <Map /> */}
      <div style={{overflow: "hidden"}} >
      <Map_copy/>

      </div>
    </div>
  )
}

export default App
