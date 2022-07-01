import {useRef} from 'react'
export default function Start({setusername}) {
    const inputref=useRef();
    const handleclick=()=>{
        setusername(inputref.current.value)
    }
  return (
    <div className='start'>
      <input type="text" placeholder='Enter Your Name' className='startInput' ref={inputref}/>
      <button className='startbtn' onClick={handleclick}>Start</button>
    </div>
  )
}
