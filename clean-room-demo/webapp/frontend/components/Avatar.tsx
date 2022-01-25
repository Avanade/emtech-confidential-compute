import { NextPage } from "next"
import Image from 'next/image'

const Avatar:NextPage<{letter?:string, imgSrc?:string, className?:string}> = (context) => {
    const {letter, imgSrc, className} = context
    return (
        <>
            <div className={`base-6 w-7
                rounded-full border-2 border-primary bg-white
                text-primary text-center text-md ${className || className}`}>
                {
                    letter ? letter : <Image src={imgSrc} width={10} height={10} layout="responsive" objectFit="contain" />
                }
            </div>
        </>
    )
}

export default Avatar