import {ColorfullMessage} from "./components/ColorfullMessage";
import React, { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(true);

  const OnClickButton = () => {
    setNum(num + 1);
      };

  const Onclickshow = () => {
    setShow(!show);
  }

  useEffect(() => {
  if (num > 0){
   if (num % 3 === 0) {
    show || setShow(true);
  } else {
    show && setShow(false);
  } 
} 
// eslint-disable-next-line
  }, [num]) ;

  return (
    <>
  <h1>こんにちは！</h1>
  <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
  <ColorfullMessage color="pink">元気です</ColorfullMessage>
  <button onClick={OnClickButton}>ボタン</button>
  <br />
  <button onClick={Onclickshow}>on/off</button>
  <p>{num}</p>
  {show &&  <p>emoji</p>}
  </>
  )
};

export default App;