import React, { useState,useEffect } from 'react';
import useSound from "use-sound";
import play from "../assests/src_sounds_play.mp3"
import correct from "../assests/src_sounds_correct.mp3"
import wrong from "../assests/src_sounds_wrong.mp3"

export default function Structure({data,setstop,setearned,questionnumber,setquestionnumber}) {
  const [username, setusername] = useState(null)
  const [question, setquestion] = useState(null);
  const [selectedans, setselectedans] = useState(null)
  const [className, setclassName] = useState("option")

  const[letsplay]=useSound(play);
  const[correctans]=useSound(correct);
  const[wrongans]=useSound(wrong);

  useEffect(() => {
    letsplay();
  }, [letsplay])

  useEffect(() => {
    setquestion(data[questionnumber-1]);
  }, [data,questionnumber])

  const handleclick=(m)=>{
    setselectedans(m)
    setclassName("option active")
    setTimeout(() => {
      setclassName(m.correct?"option correct":"option wrong")
    }, 3000);
    setTimeout(() => {
      if(m.correct){
        correctans();
        setTimeout(() => {
          setquestionnumber((prev)=>prev+1);
        setselectedans(null)
        }, 3000);
      }
      else{
        wrongans();
        setTimeout(() => {
          setstop(true);
        }, 3000);
      }
    }, 5000);
  }
  return (
    <div className='structure'>
          <div className="question">{question?.question}</div>
        <div className="answer">
          {
            question?.answers.map(m=>{
              return(
                <div className={selectedans===m? className: "option"} onClick={()=>handleclick(m)}>{m.text}</div>
              )
            })
          }
      </div>
    </div>
  )
}
