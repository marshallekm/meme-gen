import React, {useState, useEffect} from 'react'


export default function Meme(){

const [memeImage, getMemeImage] = useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/43a45p.png"
})

const [allMemeImages, setAllMemeImages] = useState([])

const getRandomPic = () => {
const getIndex = Math.floor(Math.random() * allMemeImages.length);
const thing = allMemeImages[getIndex].url
getMemeImage(newMemeImage => {
  return {
    ...newMemeImage,
    randomImage: thing
  }
  })
}

const handleChange = (event) => {
const {name, value} = event.target
getMemeImage(prevMemeImage => {
  return {
    ...prevMemeImage,
    [name]:value
  }
})
}

const handleSubmit = (event) => {
  event.preventDefault()
}

useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
}, [])

console.log(allMemeImages)


  return (
<div>
  <div className= "form--div">
    <div className ="input--div">
     <form onSubmit = {handleSubmit}>
        <input
        type= "text"
        placeholder="Top"
        className="form1"
        name="topText"
        onChange = {handleChange}
        value = {memeImage.topText}
         />

        <input
        type="text"
        placeholder="Bottom"
        className="form2"
        name= "bottomText"
        onChange ={handleChange}
        value ={memeImage.bottomText}
        />
      <div className="button-div">
        <button
          className="form--button"
          onClick={getRandomPic}
        >
          Click me!
        </button>
      </div>
    </form>
  </div>

    <div className ="meme">
      <img src={memeImage.randomImage} className="meme--image" />
      <h2 className = "meme--text top">{memeImage.topText}</h2>
      <h2 className = "meme--text bottom">{memeImage.bottomText}</h2>
    </div>
  </div>
</div>
)
}
