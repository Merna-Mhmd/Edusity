import React, { useRef } from 'react'
import './Videop.css'
import video from '../../assets/college.mp4'
const Videop = ({playstate,setplaystate}) => {

  const player=useRef(null);

const closeplayer=(e)=>{
  if(e.target===player.current){
    setplaystate(false);
  }
}


  return (
    <div className={`video ${playstate?'':'hide'}`} ref={player} onClick={closeplayer}>
<video src={video} autoPlay muted controls></video>


    </div>
  )
}

export default Videop