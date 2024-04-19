import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar/Navbar";
import TabsComponent from "../Components/Dashboard/TabsComponent";
import { coinsMarket } from "../Network/ApiCalls";

const DashboardPage= ()=>{

    const [coinsData, setCoinsData]= useState([]);

    useEffect(()=>{

        (
            async()=>{

                const response = await coinsMarket();    
                console.log(response);
                setCoinsData(response.data);
            }
        )()

    },[]);

    return(
        <div>
            <Navbar />
            <TabsComponent coinsData={coinsData} />
        </div>
    )
}

export default DashboardPage