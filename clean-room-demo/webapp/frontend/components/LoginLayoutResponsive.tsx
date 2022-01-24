import { NextPage } from "next";
import Image from 'next/image'
import { FC, Component } from "react";

class LoginPageResponsive extends Component {
    static Step = props => {return <>{props.children}</>}
    static Main = props => {return <>{props.children}</>}
    static Bottom = props => {return <>{props.children}</>}

    render(){
        let imgSrc = '/assets/insert 1.png'
        let msg = 'Please Insert your YubiKey and touch it\n to generate unique password!'
        if(this.props.children[0].props.children==3){
            imgSrc = '/assets/id 1.png'
            msg = 'Please hold up your badge in front of the webcam to scan!'
        }
        return (
            <div className="flex absolute left-0 top-16 right-0 bottom-0">
            {/* LEFT */}
            <div className="flex-col z-0 absolute h-full w-full sm:w-1/2 sm:block sm:relative">
              {/* MAIN IMAGE */}
                {/* <Image className="object-cover h-full w-full" src={imgSrc}  layout="responsive"></Image> */}
                <img className="object-cover h-full w-full" src={imgSrc} alt=""/>
            </div>
            {/* RIGHT */}
            <div className="grid z-50 abslute w-full sm:w-1/2 sm:relative content-between sm:content-around">
              {/* HEADER */}
              <div className="flex justify-around mt-5 sm:mt-0">
                <div></div>
                {/* <Image src="/oltiva-logo.png" width={100} height={'auto'} /> */}
                <div><img src="/oltiva-logo.png" alt="" width="100"/></div>
              </div>
              {/* MAIN SECTION */}
              <div className="bg-pink-100">
                    <div className="bg-white w-80 mx-auto">
                    {this.props.children[1]}
                    {/* {MainSection(step)} */}
                    </div>
              </div>
              {/* BUTTON SECTION */}
              <div className="flex justify-around">
                {this.props.children[2]}
                {/* <div className="bg-blue-900 text-white py-1 px-5" onClick={() => { step < 3 ? setStep(step+1) : setStep(1)}}>Try Again</div> */}
                <div className="text-blue-900">Step {this.props.children[0]}/3</div>
              </div>
              {/* FOOTER */}
              <footer className="text-center text-white bg-blue-400 bottom-0 w-full p-3 text-sm sm:w-1/2 sm:fixed sm:left-0">
                    {msg}
                    {/* <p>Please Insert your YubiKey and touch it <br/>
                    to generate unique password!</p> */}
              </footer>
            </div>
        </div>
        )
    }
}

export default LoginPageResponsive