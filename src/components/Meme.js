import React, {useState} from 'react'
import memesData from "../memesData.js"

export default function Meme(){

const [memeImage, getMemeImage] = useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/43a45p.png"
})

const [allMemeImages, setAllMemeImages] = useState(memesData)

const getRandomPic = () => {
const memesArray = allMemeImages.data.memes
const getIndex = Math.floor(Math.random() * memesArray.length);
const thing = memesArray[getIndex].url
getMemeImage(newMemeImage => {
  return {
    ...newMemeImage,
    randomImage: thing
  }
  })
}

  return (
<div>
  <div className= "form--div">
    <div className= "input--div">
        <input
        type= "text"
        placeholder="Top"
        className="form1"
         />

        <input
        type="text"
        placeholder="Bottom"
        className="form2"
        />
      </div>
<div className="button-div">
      <button
        className="form--button"
        onClick={getRandomPic}
        >
          Click me!
      </button>
</div>

    <div className ="meme">
      <img src={memeImage.randomImage} className="meme--image" />
      <h2 className = "meme--text top">Hey</h2>
      <h2 className = "meme--text bottom">Hi</h2>
    </div>
  </div>
</div>
)
}
