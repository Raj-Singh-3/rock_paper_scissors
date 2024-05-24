import React,{useState} from 'react'
import paper from './paper.png';
import rock from './rock.png';
import scissors from './scissors.png';
import './Structure.css';

function Structure() {
  const [val,setVal] = useState("Play your move");
  const [uVal,setuVal] = useState(0);
  const [cVal,setcVal] = useState(0);
  function compVal()
  {
    const arr = ["rock","paper","scissors"];
    let k = Math.floor(Math.random()*3);
    return arr[k];
  }
  const prom1=(e)=>{
    let k = e.target.id;
    let b = compVal();
    if(b === k)
      {
        setVal(`Its a Draw, you choose ${k} and Comp choose ${b}`);
      }
      else
      {
          let flag = true;
          if(k === "rock")
          {
              flag = (b ==="scissors"?true:false);
          }
          else if(k === "paper")
          {
              flag = (b === "rock"?true:false);
          }
          else
          {
              flag = (b === "paper"?true:false);
          }
          if(flag === true)
          {
            setuVal(uVal+1);
            setVal(`Congratulations!, you choose ${k} and Comp choose ${b}`);
          }
          else
          {
              setcVal(cVal+1);
              setVal(`OOps!, you choose ${k} and Comp choose ${b}`);  
          }
      }
  
  }
  return (
    <div id="container">
      <h1>Rock Paper Scissors</h1>
      <div className="imgs">
        <img id="rock" src={rock} alt="rock" height="70rem" width="100rem" onClick={prom1}></img>
        <img id="paper" src={paper} alt="paper" height="70rem" width="100rem" onClick={prom1}></img>
        <img id="scissors" src={scissors} alt="scissors" height="70rem" width="100rem" onClick={prom1}></img>
      </div>
      <div className='heading'>
        <p>you</p>
        <p>comp</p>
      </div>
      <div className='content'>
        <p>{uVal}</p>
        <p>{cVal}</p>
      </div>
      <p id="msg">{val}</p>
    </div>

  )
}


export default Structure;