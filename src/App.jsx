import React, { useContext } from "react"
import Sidebar from "./componants/sidebar"
import Player from "./componants/player"
import Display from "./componants/diplay"
import { Playercontex } from "./contex/playercontex"

function App() {

  const {audioRef,track} = useContext(Playercontex)

  return (
  <div className="h-screen bg-black">
    
    <div className="h-[90%] flex">
          <Sidebar/>
          <Display/>
    </div>
    <Player/>
    <audio ref={audioRef} src={track.file} preload="auto">
      
    </audio>
  </div>
  )
}

export default App
