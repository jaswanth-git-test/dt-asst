import React  from 'react'
import './index.css' 

import bellSolid from './assets/bell-solid.svg' 
import houseChimney from './assets/house-chimney-solid.svg'
import screwDriver from './assets/screwdriver-wrench-solid.svg'
import binoculars from './assets/binoculars-solid.svg'
import ellipsis from './assets/ellipsis-vertical-solid.svg'



const TopnavBar = ()=>{

    return(
        <div className='main-container-top-nav'>
            <div className='logo-container'>
            <div className='nav-logo'>

            </div>
            
                <p className='deep-text'>DEEP</p>
                <p className='thought-text'>THOUGHT</p>
         
            </div>
            <div className='menu-container'>
                <div className='menu-item-circle '>
                     <img  src={houseChimney}  alt='house-icon' className='svg '/>
                </div>
                <div className='menu-item-circle '>
                     <img  src={binoculars}  alt='binoculars' className='svg '/>
                </div>
                <div className='menu-item-circle '>
                     <img  src={screwDriver}  alt='screwdriver-wrench' className='svg'/>
                </div>
                <div className='menu-item-circle '>
                     <img  src={bellSolid}  alt='bell' className='svg'/>
                </div>
                <div className='menu-item-image '>
                     
                </div>
                <div className='menu-item '>
                     <img  src={ellipsis}  alt='bell' className='svg'/>
                </div>

            </div>
            

        </div>
    )
}

export default TopnavBar