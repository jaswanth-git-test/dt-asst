
import React from "react"

import './index.css'

import InfoIcon from './iconAssets/circle-info-solid.svg'


const AssetContainer = (props)=>{
    const {asset} = props;
    const {asset_content,asset_description,asset_title
    } = asset;

    console.log(asset)


    return(
        <div className="main-container-assets">
                <div className="asset-heading">
                        <div className="asset-heading-text">
                            <p>{asset_title}</p>
                        </div>
                        <div className="asset-heading-icon">
                            <img src={InfoIcon} alt='info-icon' />
                        </div>
                        
                </div>
                <div className="asset-description">
                    <p><span>Description: </span>{asset_description}</p>
                </div>
                <div className="asset-type-iframe">
                    <iframe src={asset_content} title="title"></iframe>
                </div>
        </div>
    )
}

export default AssetContainer