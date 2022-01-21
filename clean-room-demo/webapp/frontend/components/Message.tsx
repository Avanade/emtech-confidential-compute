import { NextPage } from "next"
import Loading from './Loading'


const Message: NextPage<{ message1: string, message2: string, loading?: boolean }> = (context) => {
    const { message1, message2 } = context

    return (
        <>
            {context.loading ? <Loading /> :
                <div  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="GREEN"  >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            }
          
            <div className="flex place-content-center text-blue-800 text-4xl pb-0  pt-14">{message1}</div>

            <div className="flex place-content-center text-sm pt-14"   >{message2}</div>
        </>
    )
}

export default Message