import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../assets/assets";

export const Playercontex = createContext()

const Playercontexprovider = (props) => {
 
      const audioRef = useRef();
      const seekbg = useRef();
      const seekbar = useRef();

      const [track, settrack] = useState(songsData[0])
      const [playstatus, setplaystatus] = useState(false)
      const [time, settime] = useState({

        currenttime:{
            second: 0,
            minute: 0
        },
        
        totaltime:{
            second: 0,
            minute: 0
        }

      })

      const play = () => {
        audioRef.current.play()
        setplaystatus(true)
      }

      const pause = () => {
        audioRef.current.pause()
        setplaystatus(false);
      }


      const playwithid = async (id) => {
            await settrack(songsData[id])
            await audioRef.current.play()
            setplaystatus(true)
      }

      const previous = async () => {
            if(track.id > 0){
              await settrack(songsData[track.id - 1])
              await audioRef.current.play()
              setplaystatus(true)
            }
      }

      const next = async () => {
            if(track.id < songsData.length - 1){
              await settrack(songsData[track.id + 1])
              await audioRef.current.play()
              setplaystatus(true)
            }
      }

      const seeksong = (e) => {
        const offsetX = e.nativeEvent.offsetX;
        const offsetXWidth = seekbg.current.offsetWidth;
        
        if (offsetX && offsetXWidth) {
          const newTime = (offsetX / offsetXWidth) * audioRef.current.duration;
          audioRef.current.currentTime = newTime;
        }
      };
      
      

      useEffect(() => {
        const intervalId = setInterval(() => {
          if (audioRef.current && !isNaN(audioRef.current.duration)) {
            seekbar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration*100))+'%'
            settime({

              currenttime: {
                second: Math.floor(audioRef.current.currentTime % 60),
                minute: Math.floor(audioRef.current.currentTime / 60)
              },
              totaltime: {
                second: Math.floor(audioRef.current.duration % 60),
                minute: Math.floor(audioRef.current.duration / 60)
              }
            });
          }
        }, 1000);
      
        return () => clearInterval(intervalId);
      }, [audioRef]);
      
     
      const cosntexvalue = {
            audioRef,
            seekbar,
            seekbg,
            track,settrack,
            playstatus,setplaystatus,
            time,settime,
            play,pause,
            playwithid,
            previous,next,
            seeksong
      }

      return (
        <Playercontex.Provider value={cosntexvalue}>
            {props.children}
        </Playercontex.Provider>
      )
}

export default Playercontexprovider