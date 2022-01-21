import { NextPage } from "next"
import Loading from './Loading'
import {CheckCircleIcon,XCircleIcon,InformationCircleIcon} from '@heroicons/react/outline'
import { Switch } from "@headlessui/react"

const Message: NextPage<{ message1: string, message2: string,type:'info'|'success'|'loading'|'error' }> = (context) => {
    const { message1, message2  } = context
    let returnmsg:any
        switch (context.type) {
            case    'info':
                            returnmsg= <InformationCircleIcon  height={75} width={75} color="Red"  />
                            break;
            case 'success':
                            returnmsg=<CheckCircleIcon height={75} width={75} color="Green"/>  
                            break;
            case 'loading':
                            returnmsg= <Loading />
                            break;
            default:
                            returnmsg=<XCircleIcon  height={75} width={75} color="Red"  />
                            break;
        }
    return (
        <>
        <div className="flex flex-col h-full place-items-center text-center">
            <div className="basis-2/4 h-2/4">
                  
                         { returnmsg}
                   
             </div>
            <div className="text-blue-800 basis-1/4 h-1/4 text-lg">{message1}</div>
            <div className="text-sm  basis-1/4"   >{message2}</div>
        </div>
        </>
    )
}

export default Message

function type(type: any): import("react").ReactNode {
    throw new Error("Function not implemented.")
}
