import React, { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import Summary from "./Summary";
import './App.css';
import "react-datepicker/dist/react-datepicker.css";
import UserForm from "./UserForm";
import TransactionList from "./TransactionList";
import axios from "axios";

function App() {
  const [ren, setRen] = useState(false);
  const [transArr, setTransArr] = useState([]);
  const [totalInc, setTotalInc] = useState(0);
  const [totalExp, setTotalExp] = useState(0);
  const [netBal, setNetBal] = useState(0);

  useEffect(()=>{
    axios.get("http://localhost:3000/expense").then(res => {
      console.log(res);
      setTransArr(res.data);
      let expVal = 0;
      let incVal = 0;
      res.data.forEach((ele)=>{
        if(ele.expType === "Income"){
        incVal = incVal + parseInt(ele.amount);
        } else {
          expVal = expVal + parseInt(ele.amount);
        }
      })
      setTotalInc(incVal);
      setTotalExp(expVal);
      setNetBal(incVal - expVal);
    });
  },[ren])
  return (
    <div className="container border border-light shadow p-3 mb-5 bg-white rounded" style={{width:"30%", maxHeight:"100%"}}>
      <div className="row">
        <HeaderSection netBal={netBal}/>
      </div>
      {/* ------------------------------- */}
      <div className="row" >
        <Summary totalInc={totalInc} totalExp={totalExp}/>
      </div>
      {/* ------------------------- */}
      <div className="row">
        <UserForm ren={ren} setRen={setRen} />
      </div>
      {/* ---------------------------------------------- */}
      <div className="row">
        {
          transArr.map((item, i)=><TransactionList item={item} key={i} ren={ren} setRen={setRen} />)
        }
      </div>
    </div>

  );
}

export default App;
