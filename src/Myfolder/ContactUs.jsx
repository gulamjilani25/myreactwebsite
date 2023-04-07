import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import '../Myfolder/Extra.css'

const ContactUs = () => {
const [add, setAdd] = useState(0);

const Add = () => {
setAdd(add+1);
}

  return (
    <div >
      {add}
      <Button className='abc' onClick={Add}>Add</Button>
    </div>
  )
}

export default ContactUs;
