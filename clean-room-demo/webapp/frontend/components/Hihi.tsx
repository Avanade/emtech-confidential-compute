
import { NextPage } from "next"
//export default function hi() {
 //   const Loading:NextPage = () => {
//const Hi=  () => {
const Hihi: NextPage<{ caption?: string  }> = (context) => {
    const { caption  } = context
    return (
        <>   
            <div>
               <p> Hi boys {caption}</p>
            </div>
        </>
    )
}


export default Hihi

