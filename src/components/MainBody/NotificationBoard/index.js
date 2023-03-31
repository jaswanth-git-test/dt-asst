import React from 'react'

import { useState } from 'react'

import './index.css'

import closeIcon from './assets/xmark-solid.svg'
import plusIcon from './assets/plus-solid.svg'

const NotificationBoard = ()=>{

    const [notificationClosed,setNotification] = useState(false)

    const toggleNoticeBoard = ()=>{
        setNotification(!notificationClosed)
    }

    return(
         
        <div className={`main-container-noticeboard ${notificationClosed?'notice-board-closed':'notice-board-open'}`}>
            <div className="noticeboard-container">
                <div className='close-icon-container'>
                    <img src={notificationClosed?plusIcon:closeIcon} alt='close-icon'  className='close-icon-img' onClick={toggleNoticeBoard}/>
                </div>
                <div className='text-notice-board'>
                  <p>N</p><p>o</p><p>t</p><p>i</p><p>c</p><p>e</p><br/><p>B</p><p>o</p><p>a</p><p>r</p><p>d</p>
                </div>
            </div>
        </div>
    )
}

export default NotificationBoard;