import { XIcon } from "@heroicons/react/outline"
import { NextPage } from "next"
import { useEffect, useRef, useState } from "react"


const PopupButton:NextPage<{
        label:any,
        className?:string,
        pointer?:'up'|'down'|'left'|'right',
        popupPosition?:'up'|'down'|'left'|'right',
        noBackground?:boolean,
        persistent?:boolean // use to disable outsideClick(),
        closeButton?:boolean //use to add close button
    }> = (context) => {
    const {className, pointer, popupPosition, persistent, closeButton} = context
    const noBackground = context.noBackground || false
    const [show, setShow] = useState(false)
    const divPopup = useRef(null)

    useEffect(()=>{
        const outsideClick = (e) => {
            if(show && divPopup.current && !divPopup.current.contains(e.target) && persistent!=true){
                setShow(prev => false)
            }

        }
        document.addEventListener('click', outsideClick)

        return () => {
            document.removeEventListener('click', outsideClick)
        }

    })

    return (
        <>
            <span className={`relative inline-block ${className}`}>
                <div className={`rounded-lg px-3 p-2 ${noBackground ? 'text-primary pr-0' : 'bg-primary text-white'} text-xs
                    ${pointer ? `after:content-[''] after:absolute after:border-8 after:border-solid`:null}
                    ${pointer=='up'?`after:-top-[50%] after:left-[25%] after:border-t-transparent after:border-r-transparent after:border-b-primary after:border-l-transparent`:null}
                    ${pointer=='down'?`after:top-[100%] after:left-[25%] after:border-t-primary after:border-r-transparent after:border-b-transparent after:border-l-transparent`:null}
                    ${pointer=='left'?`after:top-[25%] after:right-[100%] after:border-t-transparent after:border-r-primary after:border-b-transparent after:border-l-transparent`:null}
                    ${pointer=='right'?`after:top-[25%] after:left-[100%] after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-primary`:null}
                    `}
                    onClick={()=>setShow(!show)}>
                    {context.label}
                </div>
                <div ref={divPopup} className={`absolute mt-3 pr-2 min-h-[60px] min-w-[60px] max-h-60 w-auto bg-slate-100 text-center
                        rounded-lg border-slate-200 border-2 overflow-auto overflow-x-hidden
                        ${show ? 'block' : 'hidden'}
                        ${popupPosition=='up' ? 'bottom-[125%]' : null}
                        ${popupPosition=='left' ? 'top-0 right-[125%]' : null}
                        ${popupPosition=='right' ? 'top-0 left-[125%]' : null}
                    `}>
                    <div className={`${closeButton ? 'block' : 'hidden'}`} ><XIcon width={20} onClick={()=>setShow(false)}></XIcon></div>
                    <div>{context.children}</div>
                </div>
            </span>
        </>
    )
}

export default PopupButton