import { XIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

const Modal:NextPage<{title:string, visible:boolean, persistent?:boolean, onClose:any, width?:'sm'|'md'|'lg'|'full'}> = (context) => {
    const {title, width, onClose} = context
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

    const getWidth = (width) => {
        switch (width) {
            case 'sm': return 'w-full md:w-4/12';
            case 'md': return 'w-full md:w-6/12';
            case 'lg': return 'w-full md:w-10/12';
            case 'full': return 'w-full';
        }
    }

    const modal = () => {
        if(!visible){
            return null
        } else {
            return (
                <>
                    <div className="flex fixed top-0 w-screen h-screen bg-black/50 p-3 z-50" ref={modalBg}>
                        {/* MAIN MODAL */}
                        <div className={`bg-[#f9f9f9] m-auto shadow-xl py-3 px-5 h-auto ${getWidth(width)}`} ref={modalMain}>
                            {/* MODAL HEADER */}
                            <div className="flex justify-between mb-3">
                                <span className="text-xl text-blue-900">{title}</span>
                                <XIcon className="text-blue-900" width={25} onClick={() => onClose()} />
                            </div>
                            {/* MODAL BODY */}
                            <div>
                                {context.children}
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