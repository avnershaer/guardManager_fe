import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BlueWiteButton from "../buttons/BlueWiteButton";
import AllExchangesReport from "../reports/AllExchangesReport";
import ExchangesReport from "../reports/ExchangesReport";

function ReportsPanel(){

    const [reportType, setReportType] = useState('');
    const navigate = useNavigate();

    function HandleAllClick(){
        setReportType('all');
    };
    
    function HandleRegClick(){
        setReportType('regular');
    };
    
    function HandleCrossClick(){
        setReportType('cross');
    };
    
    function HandlePaidClick(){
        setReportType('paid');
    };

    return (
        <div className="bottuns-panel">
            <div className="buttons-container">
                <BlueWiteButton
                    width="80px"
                    fontSize="12px"
                    height="20px"
                    value="חזרה"
                    fontWeight="normal"
                    onClick={() => navigate('/ManagePanel')}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="דוח החלפות כללי"
                    fontWeight="normal"
                    onClick={() => HandleAllClick()}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="דוח החלפות רגילות"
                    fontWeight="normal"
                    onClick={() => HandleRegClick()}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="דוח החלפות בהצלבה"
                    fontWeight="normal"
                    onClick={() => HandleCrossClick()}
                />
                <BlueWiteButton
                    width="130px"
                    fontSize="12px"
                    height="20px"
                    value="דוח החלפות בשכר"
                    fontWeight="normal"
                    onClick={() => HandlePaidClick()}
                />
            </div>
            <div className="report-container">
                {reportType === 'all' && <AllExchangesReport/>}
                {reportType === 'regular' && <ExchangesReport reportPath='/exchange_report_by_type/ordinary'/>}
                {reportType === 'cross' && <ExchangesReport reportPath='/exchange_report_by_type/cross'/>}
                {reportType === 'paid' && <ExchangesReport reportPath='/exchange_report_by_type/paid'/>}
            </div>
        </div>
    );
}

export default ReportsPanel;