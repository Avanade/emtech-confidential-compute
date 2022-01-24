import { NextPage } from "next";
import React from "react";
import Webcam from 'react-webcam'

const Camera:NextPage = () => {
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );

    return <Webcam audio={false}
    height={720}
    ref={webcamRef}
    screenshotFormat="image/jpeg"
    width={1280}
    videoConstraints={videoConstraints} />
}

export default Camera