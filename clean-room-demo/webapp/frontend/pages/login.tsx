import LoginPage from "@/components/LoginLayout";
// import { LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import Textbox from '../components/Textbox'
import Button from '../components/Button'
import {UserIcon, KeyIcon} from '@heroicons/react/outline'
import Message from '../components/Message'

export default function Login() {
  // let step = 1
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const setStep = (n) => {
  //   step = n
  // }

  const start = () => {
    let Main = (
      <>
        <div className="text-secondary font-semibold">Log In</div>
        <p className="text-xs">Use your corporate Username and generate your YubiKey to log in</p>
        <div className="mt-5">
          <Textbox value={username} id="Username" name="Username" type="text" onChange={(value:string) => setUsername(value)} preicon={UserIcon}/>
          <Textbox value={password} id="Password" name="Password" type="password" onChange={(value:string) => setPassword(value)} preicon={KeyIcon}/>
        </div>
      </>
    )
    let Bottom = (
      <Button onClick={() => setStep(2)}>Login</Button>
    )
    // console.log('rendering start')
    return <LoginPage Step={1} Main={Main} Bottom={Bottom}></LoginPage>
  }

  const validating = () => {
    let Main = (
      // <div>validating</div>
        <Message message1="Please wait" message2="Validation in progress..." loading={true}></Message>
    )
    let Bottom = (
      <Button onClick={() => setStep(3)}>Next Step</Button>
    )
    // console.log('rendering validating')
    return <LoginPage Step={2} Main={Main} Bottom={Bottom}></LoginPage>
  }

  const nextStep = () =>{
    let Main = (
      <>
        <Message message1="Your key has been verified!" message2="Successfuly Logged in"></Message>
      </>
    )
    let Bottom = (
      <Button onClick={() => setStep(1)}>Next Step</Button>
    )
    // console.log('rendering next step')
    return <LoginPage Step={3} Main={Main} Bottom={Bottom}></LoginPage>
  }

  return (
    <>
      <div className={step==1 ? 'block' : 'hidden'}>{start()}</div>
      <div className={step==2 ? 'block' : 'hidden'}>{validating()}</div>
      <div className={step==3 ? 'block' : 'hidden'}>{nextStep()}</div>
    </>
  )

}
