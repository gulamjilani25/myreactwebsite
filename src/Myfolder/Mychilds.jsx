import React from 'react';
import '../Myfolder/Extra.css'
import Subchild from '../Myfolder/Subchilds';

function Mychilds(props) {
  return (
    <div className='two'>
        <h2>Mychilds {props.mykey} {props.myver}</h2>
        
      {/* <Subchild mysubchil={'pppppppppppppppp'}></Subchild> */}
      <Subchild mysubchil={props.myver}></Subchild>
      </div>
  )
}

export default Mychilds