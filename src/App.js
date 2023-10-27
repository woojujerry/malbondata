import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import Header from "./Header";
import Slider from "./Slider";
import NewinData from "./NewinData";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function App() {
  let [newin, setNewin] = useState(NewinData);
  let [count, setCount] = useState(1);
  return (
    <div className="App">
      <>
        {/* header */}
        <Header/>
        <Routes>
          {/* 메인페이지 */}
          <Route path="/" element={<div>
            {/* slider */}
            <Slider/>
            <Title_NEWIN/>
            <div className="container">
              <div className="row">
                {newin.map((ele,i)=>{return (<NEWIN newin={newin[i]}/>);})}
              </div>
            </div>
            <Button 
              variant="outline-secondary" 
              style={{fontSize: "13px", opacity: "0.7", padding: "7px 20px 7px 20px", marginTop: "40px"}}
              count={count}
              onClick={()=>{
                if(count === 1){
                  axios.get(NewinData2).then((result)=>{
                    let copyNewin1 = [...newin, ...result.NewinData];
                    setNewin(copyNewin1);
                    setCount(2);
                  });
                }else if(count === 2){
                  axios.get(NewinData3).then((result)=>{
                    let copyNewin2 = [...newin, ...result.NewinData];
                    setNewin(copyNewin2);
                    setCount(3);
                  });
                }else if(count === 3){
                  axios.get(NewinData4).then((result)=>{
                    let copyNewin3 = [...newin, ...result.NewinData];
                    setNewin(copyNewin3);
                    setCount(4);
                  });
                }else if(count === 4){
                  axios.get(NewinData5).then((result)=>{
                    let copyNewin4 = [...newin, ...result.NewinData];
                    setNewin(copyNewin4);
                    setCount(5);
                  });
                }if(count === 5){
                  alert("더 이상 상품이 없습니다.");
                }}}>MORE</Button>{" "}
          </div>} />
          <Route path="detail" element={<div>상세페이지</div>} />
        </Routes>
      </>
    </div>
  );
}

const Title_NEWIN =()=> {
  let tst1 = {
    marginTop: "70px",
    textAlign: "center",
    color: "#1a1a1a",
    fontSize: "28px",
    fontWeight: "700"
  };
  let tst2 = {
    marginBottom: "40px",
    textAlign: "center",
    color: "#1a1a1a",
    fontSize: "16px",
    fontWeight: "300"
  };
  return(
    <>
      <h3 style={tst1}>NEW IN</h3>
      <p style={tst2}>이번 주, 새롭게 공개된 말본골프의 컬렉션을 지금 바로 확인하세요.</p>
    </>
  );
}

function NEWIN(props){
  return(
    <div className="col-md-3">
      <img src={ props.newin.imgUrl }  width="80%"/>
      <h5>{ props.newin.title }</h5>
      <p>{ props.newin.content }</p>
      <p>{ props.newin.price }</p>
    </div>
  );
}

export default App;
