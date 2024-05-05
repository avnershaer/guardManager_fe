import React from "react";
import './App.css';
import GetFamiliesList from './components/families/GetFamiliesList';
import Panel2 from './components/panels/panel2';
import Panel1 from './components/panels/panel1';
import { Route, Routes } from "react-router-dom";
import DisplaySetGuardingList from './components/guarding/DisplaySetGuardingList';
import GetGuardingList from './components/guarding/GetGuardingList';
import Header from './components/panels/Header';
import Content from "./components/panels/Content";
import ContentBar from "./components/panels/ContentBar";
import DisplayFutuShifts from "./components/shifts/DispalyFutuShifts";
import GListPanel from "./components/panels/gListPanel";
import ShiftsPanel from "./components/panels/ShiftsPanel";
import GuardProcedures from "./components/temps/GuardProcedures";
import GateManual from "./components/temps/GateManual";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div className="panel1"><Panel1/></div>
      <div className="panel2">
        <Routes>
          <Route path='gListPanel' element={<GListPanel/>}></Route>
          <Route path='ShiftsPanel' element={<ShiftsPanel/>}></Route>
          
        </Routes>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <Routes>
            <Route path="GetFamiliesList" element={<GetFamiliesList/>}/>
            <Route path="DisplaySetGuardingList" element={<DisplaySetGuardingList/>}/>
            <Route path="GetGuardingList" element={<GetGuardingList/>}/>
            <Route path="DisplayFutuShifts" element={<DisplayFutuShifts/>}/>
            <Route path="GateManual" element={<GateManual/>}/>
            <Route path="GuardProcedures" element={<GuardProcedures/>}/>

          </Routes>
        </div>
        <div className="content-bar">
         
          <ContentBar/>
        </div>
      </div>
    </div>
  );
}

export default App;