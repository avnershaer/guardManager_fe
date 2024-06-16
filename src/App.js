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
import DisplayGuardingList from "./components/guarding/DisplayGuardingList";
import ManagePanel from "./components/panels/ManagePanel";
import ExchangesPanel from "./components/panels/ExchangesPanel";
import RegularExchanges from "./components/Exchanges/RegularExchanges";
import ResponseApiExchangeMessage from "./components/Exchanges/ResponseApiExchangeMessage";
import CrossExchange from "./components/Exchanges/CrossExchange";
import SecondGuardTableDisplay from "./components/Exchanges/SecondGuardTableDisplay";
import FirstGuardListTable from "./components/displayListComps/FirstGuardListTable";
import ResponseApiCrossExchangeMessage from "./components/Exchanges/ResponseApiCrossExchangeMessage";
import PaidExchanges from "./components/Exchanges/PaidExchanges";
import ResponseApiPaidExchangeMessage from "./components/Exchanges/ResponseApiPaidExchangeMessage";

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
            <Route path="DisplayGuardingList" element={<DisplayGuardingList/>}/>
            <Route path="DisplayFutuShifts" element={<DisplayFutuShifts/>}/>
            <Route path="GateManual" element={<GateManual/>}/>
            <Route path="GuardProcedures" element={<GuardProcedures/>}/>
            <Route path="ManagePanel" element={<ManagePanel/>}/>
            <Route path="ExchangesPanel" element={<ExchangesPanel/>}/>
            <Route path="RegularExchanges" element={<RegularExchanges/>}/>
            <Route path="ResponseApiExchangeMessage" element={<ResponseApiExchangeMessage/>}/>
            <Route path="ResponseApiCrossExchangeMessage" element={<ResponseApiCrossExchangeMessage/>}/>
            <Route path="ResponseApiPaidExchangeMessage" element={<ResponseApiPaidExchangeMessage/>}/>
            <Route path="CrossExchange" element={<CrossExchange/>}/>
            <Route path="SecondGuardTableDisplay" element={<SecondGuardTableDisplay/>}/>
            <Route path="FirstGuardListTable" element={<FirstGuardListTable/>}/>
            <Route path="PaidExchanges" element={<PaidExchanges/>}/>
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