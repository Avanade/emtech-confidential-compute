import { NextPage } from "next"
import {XIcon} from '@heroicons/react/outline'

const Sidebar:NextPage<{title:string, visible:boolean, position?:'left'|'right', onClose:any}> = (context) => {
    const {title, position} = context
    let visible = context.visible

    let pos = position || 'right'

    return (
        <>
            <div className={`flex flex-col divide-y
                max-h-screen overflow-auto w-11/12 sm:w-64 md:w-72 lg:w-80
                bg-lightpink
                fixed top-0 p-2
                ${visible ? 'block' : 'hidden'}
                ${pos=='right' ? 'right-0' : null}
            `}>
                <div className="flex bg-white">
                    <div className="base-11/12 w-11/12 font-medium m-2">{title}</div>
                    <div className="base-1/12 w-1/12 m-2">
                        <button onClick={context.onClose}><XIcon width={25}/></button>
                    </div>
                </div>
                <div className="bg-white">
                    {context.children}
                </div>
            </div>

        </>
    )
}

export default Sidebar