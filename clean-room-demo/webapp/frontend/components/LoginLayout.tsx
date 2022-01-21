import { NextPage } from "next";
import Image from 'next/image'


const LoginPage: NextPage<{Step:Number, Main:Object, Bottom:Object}> = (context) => {
    const {Step, Main, Bottom} = context
    let imgSrc = '/assets/insert 1.png'
    let msg = 'Please Insert your YubiKey and touch it\n to generate unique password!'
    if(Step==3){
        imgSrc = '/assets/id 1.png'
        msg='Please hold up your badge in front of the webcam to scan'
    }

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
                            <div className="basis-1/4 h-1/4 self-end pr-10 pt-10" >
                                <Image src="/oltiva-logo.png" width={100} height={21} layout="fixed"/>
                            </div>
                            <div className="basis-2/4 h-2/4 bg-lightpink">
                                <div className="flex place-content-center h-full">
                                    <div className="basis-2/3 w-2/3 bg-white p-3">
                                        {Main}
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/4 h-1/4 text-xs">
                                <div className="flex flex-row h-full">
                                    <div className="basis-1/2 w-1/2 self-end text-center mb-10">
                                        {Bottom}
                                    </div>
                                    <div className="basis-1/2 w-1/2 self-end text-center mb-10 font-semibold">
                                        <div className="text-primary my-2">Step {Step}/3</div>
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


export default LoginPage