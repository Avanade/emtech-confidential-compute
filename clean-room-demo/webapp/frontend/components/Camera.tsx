import { NextPage } from "next";
import React from "react";
import Webcam from 'react-webcam'
import Button from "./Button";

const Camera:NextPage<{onCapture?:any}> = (context) => {
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        context.onCapture(imageSrc)
      },
      [webcamRef]
    );

    return (
        <>
        <div className="flex flex-col place-content-center">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <Button onClick={capture}small={true}>Capture photo</Button>
        </div>
        </>
      );
}

export default Camera