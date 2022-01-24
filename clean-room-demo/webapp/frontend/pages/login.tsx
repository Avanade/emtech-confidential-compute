import LoginPage from "@/components/LoginLayout";
// import { LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import Textbox from '../components/Textbox'
import Button from '../components/Button'
import {UserIcon, KeyIcon} from '@heroicons/react/outline'
import Message from '../components/Message'

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
  const nextStep = () => {
    setStep(4)
    // Update code for actual procedure
  }

  const startView = () => {
    return (
      <>
        <LoginPage>
          <LoginPage.Step>1</LoginPage.Step>
          <LoginPage.Main>
            <div className="text-secondary font-semibold">Log In</div>
            <p className="text-xs">Use your corporate Username and generate your YubiKey to log in</p>
            <div className="mt-5">
              <Textbox value={username} id="Username" invalid={usernameIsInvalid} name="Username" type="text" onChange={(value:string) => setUsername(value)} preicon={UserIcon}/>
              <Textbox value={password} id="Password" invalid={passwordIsInvalid} name="Password" type="password" onChange={(value:string) => setPassword(value)} preicon={KeyIcon}/>
            </div>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => validate()}>Login</Button></LoginPage.Bottom>
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
          <LoginPage.Bottom><Button onClick={() => nextStep()}>Next Step</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }

  const nextStepView = () =>{
    return (
      <>
        <LoginPage>
          <LoginPage.Step>3</LoginPage.Step>
          <LoginPage.Main>
            <div className="text-secondary font-semibold">Log In</div>
            <p className="text-xs">Scan your corporate badge <br />Scanning in progress... <br /></p>
            <div className="mt-5">
              ... load camera ...
            </div>
          </LoginPage.Main>
          <LoginPage.Bottom><Button onClick={() => start()}>Back to start</Button></LoginPage.Bottom>
        </LoginPage>
      </>
    )
  }
  const loadView = () => {
    switch (step){ 
      case 2: return validateView()
      case 3: return successView()
      case 4: return nextStepView()
      default: return startView()
    }
  }
  
  return (
    loadView()
  )

}
