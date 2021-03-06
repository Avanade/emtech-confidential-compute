import { NextPage } from "next"
import Loading from './Loading'
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/outline'


const Message: NextPage<{ caption: string, subtext: string, type: 'info' | 'success' | 'loading' | 'error' }> = (context) => {
    const { caption, subtext } = context
    let returnIcon: any
    switch (context.type) {
        case 'info':
            returnIcon = <InformationCircleIcon height={75} width={75} className="text-blue-400"/>
            break;
        case 'success':
            returnIcon = <CheckCircleIcon height={75} width={75} color="Green" />
            break;
        case 'loading':
            returnIcon = <Loading />
            break;
        default:
            returnIcon = <XCircleIcon height={75} width={75} color="Red" />
            break;
    }
    return (
        <>
            <div className="flex flex-col h-full place-items-center text-center">
                <div className="basis-2/4 h-2/4">{returnIcon}</div>
                <div className="text-blue-800 basis-1/4 h-1/4 text-lg">{caption}</div>
                <div className="text-sm  basis-1/4">{subtext}</div>
            </div>
        </>
    )
}

export default Message

function type(type: any): import("react").ReactNode {
    throw new Error("Function not implemented.")
}
