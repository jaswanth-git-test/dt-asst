import React from "react";
import { useState } from "react"

import leftArrow from './assets/circle-arrow-left-solid.svg';
import righttArrow from './assets/circle-arrow-right-solid.svg';

import './index.css'



const JourneyBoard = ()=>{

    const [isBoardOpen,setBoardState] = useState(false)

    const toggleBoard = ()=>{
        setBoardState(!isBoardOpen)
    }
    
    const boardClass = isBoardOpen?'board-open':'board-closed'
    return(
        <div className={`main-container-journey ${isBoardOpen?'journey-board-container-open':'journey-board-container-closed'}`}>
                <div className="heading-bar-journey">
                    <p className={`${boardClass} journey-board-heading-text`}>Journey Board</p>
                    <div className='arrow-icon-container'>
                       <img src={isBoardOpen?leftArrow:righttArrow} alt="arrow"   onClick={toggleBoard}  className='arrow-icon'/>
                    </div>
                    
                </div>

                <div className={`journey-board-description ${boardClass}`}>
                    <h1 >
                        <ul>
                        <li>Explore the world of management</li>
                        </ul>
                        
                    </h1>
                    <ul>
                        <li>Technical Project Management</li>
                        <li>Threadbuild</li>
                        <li>Structure you pointers</li>
                        <li>4SA Method</li>
                    </ul>
                </div>

        </div>
    )
}

export default JourneyBoard;