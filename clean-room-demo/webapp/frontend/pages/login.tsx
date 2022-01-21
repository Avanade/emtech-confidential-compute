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
  const [main, setMain] = useState(<></>)
  const [bottom, setBottom] = useState(<></>)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const setStep = (n) => {
  //   step = n
  // }

  const start = () => {
    setMain(
      <>
        <div className="text-secondary font-semibold">Log In</div>
        <p className="text-xs">Use your corporate Username and generate your YubiKey to log in</p>
        <div className="mt-5">
          <Textbox value={username} id="Username" name="Username" type="text" onChange={(value:string) => setUsername(value)} preicon={UserIcon}/>
          <Textbox value={password} id="Password" name="Password" type="password" onChange={(value:string) => setPassword(value)} preicon={KeyIcon}/>
        </div>
      </>
    )
    setBottom(
      <Button onClick={() => validate()}>Login</Button>
    )
  }

  const validate = () => {
    setMain(
      // <div>validating</div>
        <Message message1="Please wait" message2="Validation in progress..." loading={true}></Message>
    )
    setBottom(
      <Button onClick={() => success()}>Next Step</Button>
    )
  }

  const success = () => {
    setMain(
      <>
        <Message message1="Your key has been verified!" message2="Successfuly Logged in"></Message>
      </>
    )
    setBottom(
      <Button onClick={() => nextStep()}>Next Step</Button>
    ) 
  }

  const nextStep = () =>{
    setMain(
      <>
        Scan your corporate badge <br />
        Scanning in progress... <br />
      </>
    )
    setBottom(
     <><Button onClick={() => start()}>Back to start (for now)</Button></>
    ) 
  }

  useEffect(()=>{
    start()
  },[])
  return (
    <>
      <LoginPage Step={3} Main={main} Bottom={bottom}></LoginPage>
    </>
  )

}
