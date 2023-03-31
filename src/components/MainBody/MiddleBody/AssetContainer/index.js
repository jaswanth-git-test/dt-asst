
import React from "react"

import './index.css'

import InfoIcon from './iconAssets/circle-info-solid.svg'


const AssetContainer = ()=>{


    return(
        <div className="main-container-assets">
                <div className="asset-heading">
                        <div className="asset-heading-text">
                            <p>Hello</p>
                        </div>
                        <div className="asset-heading-icon">
                            <img src={InfoIcon} alt='info-icon' />
                        </div>
                        
                </div>
                <div className="asset-description">
                    <p><span>Description: </span>Watch the video and thread build, and jot out key threads while watching that video.</p>
                </div>
                <div className="asset-type-iframe">
                    <iframe src="https://www.youtube.com/embed/TiMRwri1xJ8" title="title"></iframe>
                </div>
        </div>
    )
}

export default AssetContainer