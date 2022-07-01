import "./app.css";
import React, { useState,useEffect,useMemo } from 'react';
import Structure from "./components/Structure";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionnumber, setquestionnumber] = useState(1)
  const [stop, setstop] = useState(false)
  const [username, setusername] = useState(null)
  const [earned, setearned] = useState("₹ 0")
  let data=[
    {
      id:1,
      question:"According to the Mahabharata, who among the following was an incarnation of Dharmadeva?",
      answers:[
        {
          text:"Nakula",
          correct:false
        },
        {
          text:"Vidura",
          correct:true
        },
        {
          text:"Karna",
          correct:false
        },
        {
          text:"Kripacharya",
          correct:false
        },
      ]
    },
    {
      id:2,
      question:"What is the primary purpose of chopsticks as a device?",
      answers:[
        {
          text:" Knitting",
          correct:false
        },
        {
          text:"drum",
          correct:false
        },
        {
          text:"eating",
          correct:true
        },
        {
          text:"Playing darts",
          correct:false
        },
      ]
    },
    {
      id:3,
      question:"Which of these birds can't movie or roll their eyes inside their eye sockets?",
      answers:[
        {
          text:"Owls",
          correct:true
        },
        {
          text:"Eagles",
          correct:false
        },
        {
          text:"Parrot",
          correct:false
        },
        {
          text:"Bulbul",
          correct:false
        },
      ]
    }
  ]
  let money= useMemo(() => [
    {id:15, amount:"₹ 1,00,00,000"},
    {id:14, amount:"₹ 50,00,000"},
    {id:13, amount:"₹ 25,00,000"},
    {id:12, amount:"₹ 12,50,000"},
    {id:11, amount:"₹ 6,25,000"},
    {id:10, amount:"₹ 3,20,000"},
    {id:9, amount:"₹ 1,60,000"},
    {id:8, amount:"₹ 80,000"},
    {id:7, amount:"₹ 40,000"},
    {id:6, amount:"₹ 20,000"},
    {id:5, amount:"₹ 10,000"},
    {id:4, amount:"₹ 5,000"},
    {id:3, amount:"₹ 3,000"},
    {id:2, amount:"₹ 2,000"},
    {id:1, amount:"₹ 1,000"},
  ], [])
    
  useEffect(() => {
    questionnumber>1&&
    setearned(money.find((m)=>m.id===questionnumber-1).amount)
  }, [money,questionnumber])
  return (
    <div className="app">
      {username?(
        <>
        <div className="main">
        {stop?<h1 className="endtext">Congratulations!! {username}, You have Earned: {earned}</h1>:(
          <>
        <div className="top">
          <div className="timer"><Timer setstop={setstop} questionnumber={questionnumber}/></div>
        </div>
        <div className="bottom">
          <Structure data={data} setstop={setstop} setearned={setearned} questionnumber={questionnumber} setquestionnumber={setquestionnumber}/>
        </div>
        </>
        ) }
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {
            money.map(m=>{
              return(
              <li className={questionnumber===m.id?"moneyListItem active":"moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
            )})
          }
          
        </ul>
      </div>
        </>
      ):<Start setusername={setusername}/>}
      
    </div>
  );

}

export default App;
