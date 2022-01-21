import { NextPage } from "next"
import Loading from './Loading'


const Message: NextPage<{message1:string, message2:string, loading?:boolean}> = (context) => {
    const {message1, message2} = context

    return (
        <>
            { context.loading ? <Loading/> : null}
            
            <div>{message1}</div>
            <div>{message2}</div>
        </>
    )
}

export default Message