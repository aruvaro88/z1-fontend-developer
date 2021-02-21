import { render } from '@testing-library/react'
import React, { useState } from 'react'
import "./TakePicture.css"
import PostImg from '../Hooks/Postimg'

import {CamComponent} from '../Camcomponent/Camcomponent'

export const TakePicture = () => {
   
    const [capture, setCapture] = useState("")
    // const [capturing, setCapturing] = useState(true)

    let res = PostImg(capture)
    console.log(res)
    const handleCapture = (base64img:string) => {
        setCapture(base64img)
    }

    // const cancelCapture = () => {
    //     console.log(capturing)
    //     setCapturing(false)
    // }
    return (
        <div className="take-body">
            <div className="body-text">
                <span className="take-title">Take Picture</span>
                <span className="take-subtitle">Fit your ID card inside the frame.
                The picture will be taken automatically.</span>
            </div>
            <div className="camera-container">
                <div className={res ? 'camera-good' : 'camera-bad'}>
                    {capture.length == 0 && <CamComponent onCapture={handleCapture} />}
                    {capture.length > 0 && <img className="screenshot" src={capture} alt="capture" />}
                </div>
            </div>

            <div className="cancel-btn">
                <span className="cancel-text">Cancel</span>
            </div>

        </div>
    )
}
