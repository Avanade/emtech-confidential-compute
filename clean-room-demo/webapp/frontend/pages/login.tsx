import LoginPage from "@/components/LoginLayout";
// import { LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import Textbox from '../components/Textbox'
import Button from '../components/Button'
import {UserIcon, KeyIcon} from '@heroicons/react/outline'
import Message from '../components/Message'
import Camera from '../components/Camera'

export default function Login() {
  // let step = 1
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  //If value is true textbox border and text will appear color red
  const [usernameIsInvalid, setUsernameIsInvalid] = useState(false)
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false)

  const start = () => {
    setStep(1)
    setUsername('')
    // Update code for actual procedure
  }
  const validate = () => {
    setStep(2)
    // Update code for actual procedure
  }
  const success = () => {
    setStep(3)
    // Update code for actual procedure
  }
  const scan = () => {
    setStep(4)
    // Update code for actual procedure
  }
  const scanSuccessful = () => {
    setStep(5)
    // Update code for actual procedure
  }

  const getImage = (v) => {
    // Image in base64
    console.log(v)
  }

  const startView = () => {
    return (
      <>
        <LoginPage>
          <LoginPage.Step>1</LoginPage.Step>
          <LoginPage.Main>
            <div className="text-secondary font-semibold">Log In</div>
            <p className="text-xs">Use your corporate Username and generate your YubiKey to log in</p>
            <div className="mt-5 md:mt-10">
              <Textbox value={username} errorMessage={usernameIsInvalid ? "Invalid Username" : ""} name="Username" type="text" onChange={(e) => setUsername(e.target.value)} PreIcon={UserIcon}/>
              <Textbox value={password} errorMessage={passwordIsInvalid ? "Invalid Password" : ""} name="Password" type="password" onChange={(e) => setPassword(e.target.value)} PreIcon={KeyIcon}/>
            </div>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => validate()} disabled={username ? false : true}>Login</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }

  const validateView = () => {
    return (
      <>
        <LoginPage>
          <LoginPage.Step>1</LoginPage.Step>
          <LoginPage.Main>
            <Message caption="Please wait" subtext="Validation in progress..." type="loading"  ></Message>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => success()}>Next Step</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }

  const successView = () => {
    return (
      <>
        <LoginPage>
          <LoginPage.Step>2</LoginPage.Step>
          <LoginPage.Main>
          <Message caption="Your key has been verified!" subtext="Successfuly Logged in" type="success"></Message>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => scan()}>Next Step</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }

  const scanSuccessfulView = (name:string) => {
    return (
      <>
        <LoginPage>
          <LoginPage.Step>2</LoginPage.Step>
          <LoginPage.Main>
          <Message caption={`Welcome ${name}!`} subtext="Scanning Completed" type="success"></Message>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => start()}>Start Again</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }

  const scanView = () =>{
    return (
      <>
        <LoginPage>
          <LoginPage.Step>3</LoginPage.Step>
          <LoginPage.Main>
            <div className="text-secondary font-semibold">Scan your corporate badge</div>
            <p className="text-xs">Scanning in progress...</p>
            <div className="m-5">
              <Camera onCapture={getImage}></Camera>
            </div>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => scanSuccessful() }>Back to start</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }
  const loadView = () => {
    switch (step){ 
      case 2: return validateView()
      case 3: return successView()
      case 4: return scanView()
      case 5: return scanSuccessfulView(username)
      default: return startView()
    }
  }
  
  return (
    loadView()
  )

}
