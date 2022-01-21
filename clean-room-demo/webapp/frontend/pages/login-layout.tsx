import BasicPage from "@/components/BasicPage";
import { CheckCircleIcon, KeyIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const MainSection = (step : number) => {
  switch (step) {
    case 1:
      {/* FIRST - STEP */}
      return (<form className="bg-white space-y-5 w-80 mx-auto p-1">
        <legend className="text-blue-900 text-xl">Log In</legend>
        <p>Use your corporate Username and generate your YubiKey to log in</p>

        <div className="relative block w-full text-gray-400">
            <UserIcon className="w-5 absolute top-1 left-3" />
            <input type="text" className="w-full border border-gray-300 pl-10 text-lg focus:outline-none" placeholder="Username" />
        </div>

        <div className="relative block w-full text-gray-400">
            <KeyIcon className="w-5 absolute top-1 left-3" />
            <input type="password" className="w-full border border-gray-300 pl-10 text-lg focus:outline-none" placeholder="Password" />
        </div>
      </form>);
    case 2:
      {/* SECOND - STEP */}
      return (<div className="grid content-center space-y-3 bg-white w-80 mx-auto p-3">
        {/* <span className="animate-spin border-8 border-dotted w-16 h-16 rounded-full border-blue-800 mx-auto" /> */}
        <div className="flex animate-spin place-content-center">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none">
                <circle cx="37.5009" cy="6.79995" r="6.01089" fill="#0759A7"/>
                <circle cx="15.7766" cy="15.6574" r="6.01089" fill="#0759A7"/>
                <circle cx="6.91897" cy="37.4035" r="6.01089" fill="#0759A7"/>
                <circle cx="15.7766" cy="59.1496" r="6.01089" fill="#0759A7"/>
                <circle cx="37.5009" cy="68.007" r="6.01089" fill="#0759A7"/>
                <circle cx="59.2228" cy="59.1496" r="6.01089" fill="#0759A7"/>
                <circle cx="68.0805" cy="37.4035" r="6.01089" fill="#0759A7"/>
            </svg>

        </div>
        <div className="text-lg text-blue-900 text-center">Please wait</div>
        <div className="text-center text-sm">Validation progressed...</div>
      </div>)
    case 3:
      {/* THIRD - STEP */}
      return (<div className="grid content-center space-y-3 bg-white w-80 mx-auto p-3">
        <CheckCircleIcon className="w-20 h-auto mx-auto text-green-400"/>
        <div className="text-lg text-blue-900 text-center">Your key has been verified</div>
        <div className="text-center text-sm">Successfully Logged In</div>
      </div>)
    default:
      break;
  }
}

export default function Login() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="flex absolute left-0 top-16 right-0 bottom-0">
        {/* LEFT */}
        <div className="flex-col w-1/2 hidden sm:block relative">
          {/* MAIN IMAGE */}
          <img className="object-cover h-full w-full" src="/assets/login-credential.png" alt=""/>
          {/* FOOTER */}
          <footer className="text-center text-white bg-blue-400 absolute bottom-0 w-full p-3 text-sm">
            <p>Please Insert your YubiKey and touch it <br/>
            to generate unique password!</p>
          </footer>
        </div>
        {/* RIGHT */}
        <div className="grid w-full sm:w-1/2 relative content-around">
          {/* HEADER */}
          <div className="flex justify-around">
            <div></div>
            <div><img className="" src="/oltiva-logo.png" alt="" width="100"/></div>
          </div>
          {/* MAIN SECTION */}
          <div className="bg-pink-100">
            {MainSection(step)}
          </div>
          {/* BUTTON SECTION */}
          <div className="flex justify-around">
            <div className="bg-blue-900 text-white py-1 px-5" onClick={() => { step < 3 ? setStep(step+1) : setStep(1)}}>Try Again</div>
            <div className="text-blue-900">Step 1/3</div>
          </div>
        </div>
    </div>
  );
}