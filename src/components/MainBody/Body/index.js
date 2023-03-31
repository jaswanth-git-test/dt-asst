import React from "react"
import TopnavBar from "../../TopnavBar"
import JourneyBoard from "../JourneyBoard"
import MiddleBody from "../MiddleBody"
import NotificationBoard from "../NotificationBoard"



import './index.css'


const MainBody = ()=>{


    return (
        <div className="body-container-main">
             <TopnavBar />
             <div className="body-container">
                <JourneyBoard />
                <MiddleBody />
                <NotificationBoard />  
             </div>

               
        </div>
    )
}

export default MainBody