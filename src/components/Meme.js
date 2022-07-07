import React from 'react'

export default function Meme(){
  return (
<div>
  <form className= "form--div">
    <div className= "input--div">
      <div className="form--one">
        <label for ="form1"></label>
        <input type="text" id="form1" name="form1"></input>
      </div>
      <div className= "form--two">
        <label for ="form2"></label>
        <input type="text" id="form2" name="form2"></input>
      </div>
      </div>
    <div className= "form--button">
      <input type="submit" id="button" value="Get a new meme image"></input>
    </div>
  </form>
</div>
)
}
