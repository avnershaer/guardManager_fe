import React, { useState, useEffect } from "react";

function GetGlistTable({ apiResponse }) {
    console.log('GetGlistTable api-response:', apiResponse);


    if (!apiResponse || !apiResponse.Details || apiResponse.Details.length === 0) {
        return <div>No data available</div>;
    }

    for (let n=0; n<apiResponse.Details.length; n++){
        console.log('details n:', n, 'details arrey:', apiResponse.Details[n])

    }

}

export default GetGlistTable;