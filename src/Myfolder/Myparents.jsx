import React from 'react';
import Mychilds from '../Myfolder/Mychilds';
import '../Myfolder/Extra.css'

function Myparents() {
  var a = "React";
  localStorage.setItem("mydata",a);

  return (
    <div className='one'>
      <h1>This is parent element, {a}</h1>
      <Mychilds mykey="education" myver={a}></Mychilds>
        
    </div>
  )
}

export default Myparents