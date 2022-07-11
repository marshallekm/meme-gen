import React, {useState} from 'react'
import memesData from "../memesData.js"

export default function Meme(){

const [memeImage, getMemeImage] = useState("")


const getRandomPic = () => {
const memesArray = memesData.data.memes
const getIndex = Math.floor(Math.random() * memesArray.length);
const thing = memesArray[getIndex].url
getMemeImage(newMemeImage => newMemeImage = thing)
}


  return (
<div>
  <div className= "form--div">
    <div className= "input--div">
      <div className="form--one">
        <label for ="form1"></label>
        <input type="text" id="form1" name="form1" value="Top text"></input>
      </div>
      <div className= "form--two">
        <label for ="form2"></label>
        <input type="text" id="form2" name="form2" value= "Bottom text"></input>
      </div>
      </div>
    <div className= "form--button">
      <input onClick ={getRandomPic} type="submit" id="button" value="Get a new meme image!"></input>
    </div>
    <div className ="meme">
      <img src={memeImage} alt="" />
    </div>
  </div>
</div>
)
}
