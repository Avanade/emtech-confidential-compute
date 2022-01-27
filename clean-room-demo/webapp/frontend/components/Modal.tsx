import { XIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

const Modal:NextPage<{title:string, visible:boolean, persistent?:boolean, onClose:any, width?:'sm'|'md'|'lg'|'full'}> = (context) => {
    const {title, width} = context
    const visible = context.visible || false
    const persistent = context.persistent || false

    const modalBg = useRef(null)
    const modalMain = useRef(null)
    // const onBgClick = () => {
    //     if(!persistent) {
    //         console.log('onBgClick')
    //         context.onClose()
    //     }
    // }

    const clickedModalBg=(e)=>{
        // console.log('check')
        if(modalBg.current) {
            // console.log(!persistent, visible, modalBg.current.contains(e.target), !modalMain.current.contains(e.target))
            if(visible && modalBg.current.contains(e.target) && !modalMain.current.contains(e.target) && !persistent){
                context.onClose()
            }
        }
    }
    useEffect(()=>{
        document.addEventListener('click', clickedModalBg)
        return() => document.removeEventListener('click', clickedModalBg)
    })

    const modal = () => {
        if(!visible){
            return null
        } else {
            return (
                <>
                    <div className="absolute top-0 left-0 bg-black/75 w-full h-full" ref={modalBg} >
                        <div className={`flex place-content-center m-10 max-h-[90%] max-w-[90%]`} ref={modalMain}>
                            <div className={`bg-white min-w-[25%] divide-y-2  overflow-auto
                                ${width=='sm' ? 'w-[25%]' : null}
                                ${width=='md' ? 'w-[50%]' : null}
                                ${width=='lg' ? 'w-[75%]' : null}
                                ${width=='full' ? 'w-[100%]' : null}
                                rounded
                            `}>
                                <div className="flex m-3 text-lg font-medium">
                                    <div className="base-[95%] w-[95%]">{title}</div>
                                    <div className="base-[5%] w-[5%]">
                                        <div>
                                            <XIcon width={25} onClick={context.onClose}></XIcon>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-3">
                                    {context.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
    return (
        modal()
    )
}

export default Modal