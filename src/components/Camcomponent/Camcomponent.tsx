import React, {useState, useRef, useCallback, useEffect} from 'react'
import Webcam from 'react-webcam'
import './Camcomponent.css'

export const CamComponent = ({onCapture}:any) => {

    const webcamRef = useRef(null);
    let [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
            setTimeout(() => {
                console.log("nueva imagen en el estado")
                const imageSrc = (webcamRef as any).current.getScreenshot();
                setImgSrc(imgSrc=imageSrc);
                onCapture(imgSrc)
            },5000)
    }, [setImgSrc, onCapture]);

    const videoConstraints = {
        width: 1280,
        height: 720,
        forceScreenshotSourceSize: "true"
    };

    useEffect(() => {
        capture()
    },[])

    return (
        <div className="component-container">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
        </div>
    )
}
