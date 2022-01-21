import { NextPage } from "next"
import Loading from './Loading'
import {CheckCircleIcon,XCircleIcon,InformationCircleIcon} from '@heroicons/react/outline'
import { Switch } from "@headlessui/react"

const Message: NextPage<{ message1: string, message2: string, type: string }> = (context) => {
    const { message1, message2  } = context
    let returnmsg:any
        switch (context.type) {
            case    'info':
                            returnmsg= <div className="flex place-content-center">
                                            <InformationCircleIcon  height={75} width={75} color="Red"  />
                                        </div>
                            break;
            case 'success':
                            returnmsg=<div className="flex place-content-center"><CheckCircleIcon height={75} width={75} color="Green"/>  </div>
                            break;
            case 'loading':
                            returnmsg= <Loading />
                            break;
            default:
                            returnmsg=
                            <div className="flex place-content-center">
                            <XCircleIcon  height={75} width={75} color="Red"  />
                            </div>
                            break;
        }
    return (
        <>
        <div className="flex  flex-col">
            <div className="basis-1/2">
               { returnmsg
                
                }
           
             </div>
            <div className="flex place-content-center text-blue-800 text-xl basis-1/4 pt-8">{message1}</div>
      
            <div className="flex place-content-center text-sm  basis-1/4 pt-10"   >{message2}</div>
 
        </div>
        </>
    )
}

export default Message

function type(type: any): import("react").ReactNode {
    throw new Error("Function not implemented.")
}
