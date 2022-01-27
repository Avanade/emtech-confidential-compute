import { NextPage } from "next"
import Image from 'next/image'

const Avatar:NextPage<{letter?:string, imgSrc?:string, className?:string, smaller?:boolean}> = (context) => {
    const {letter, imgSrc, className} = context
    const smaller = context.smaller || false
    return (
        <>
            <div className={`base-6
                rounded-full border-2 border-primary bg-white
                text-primary text-center text-md ${smaller ? 'text-sm w-6' : 'text-md w-7'} ${className || className}`}>
                {
                    letter ? letter : <Image src={imgSrc} width={10} height={10} layout="responsive" objectFit="contain" />
                }
            </div>
        </>
    )
}

export default Avatar