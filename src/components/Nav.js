import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons'
export default function Nav(){
  return (
    <div>
      <nav className= "navbar">
        <div className="left--nav">
          <FontAwesomeIcon icon={faFaceLaughBeam}/>
          <h1> Meme Generator</h1>
        </div>
        <h2>React Course Project</h2>
      </nav>
    </div>
  )
}
