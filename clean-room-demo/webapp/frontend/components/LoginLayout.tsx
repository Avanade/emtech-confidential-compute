import { NextPage } from "next";
import Image from 'next/image'
import { FC, Component } from "react";

class LoginPage extends Component {
    static Step = props => {return <>{props.children}</>}
    static Main = props => {return <>{props.children}</>}
    static Bottom = props => {return <>{props.children}</>}

    render(){
        let imgSrc = '/assets/insert 1.png'
        let msg = 'Please Insert your YubiKey and touch it\n to generate unique password!'

        return (
            <div className="flex place-content-center">
                <div className="w-3/5">
                    <div className="flex flex-row place-content-center">
                        <div className="basis-1/2 w-1/3">
                            <div className="flex flex-col relative">
                                <div>
                                    <Image src={imgSrc} width={705} height={690} layout="responsive"></Image>
                                </div>
                                <div className="absolute py-3 bg-lightblue text-white bottom-0 w-full right-0 text-center text-xs whitespace-pre-wrap">
                                    {msg}
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 w-1/3">
                            <div className="flex flex-col h-full place-content-center">
                                <div className="basis-1/5 h-1/5 self-end pr-10 pt-5" >
                                    <Image src="/oltiva-logo.png" width={100} height={21} layout="fixed"/>
                                </div>
                                <div className="basis-3/5 h-3/5 bg-lightpink">
                                    <div className="flex place-content-center h-full">
                                        <div className="basis-2/3 w-2/3 bg-white p-3">
                                            {this.props.children[1]}
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/5 h-1/5 text-xs">
                                    <div className="flex flex-row h-full">
                                        <div className="basis-1/2 w-1/2 self-end text-center mb-5">
                                            {this.props.children[2]}
                                        </div>
                                        <div className="basis-1/2 w-1/2 self-end text-center mb-5 font-semibold">
                                            <span className="text-primary">Step {this.props.children[0]}/3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage