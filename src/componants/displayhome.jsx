import React from 'react'
import Navbar from './navbar'
import { albumsData , songsData} from '../../assets/assets'
import Albumitem from './albumitem'
import Songitem from './songitem'

function Displayhome() {
  return (
    <>
    <Navbar/>
    <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className="flex overflow-auto">
        {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
    </div>

    <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Today's hits</h1>
        <div className="flex overflow-auto">
        {songsData.map((song,index)=>(<Songitem key={index} name={song.name} desc={song.desc} id={song.id} image={song.image}/>))}
        </div>
    </div>
    </>
  )
}

export default Displayhome