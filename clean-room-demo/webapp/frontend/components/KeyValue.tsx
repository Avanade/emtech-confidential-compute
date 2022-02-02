import { NextPage } from "next";

const KeyValue:NextPage<{name:string, value:any, vertical?:boolean, action?:any}> = (context) => {
    const {name,value, action} = context
    const vertical = context.vertical || false

    return (
        <div className={`flex ${vertical ? 'flex-col' : 'flex-row'}`}>
            <div className={`${vertical ? 'base-full w-full' : 'base-1/2 w-1/2'} font-medium`}>
                <span className="inline-block w-[95%] text-zinc-600">
                    {name}
                </span>
                <span className="inline-block w-[5%]">{action}</span>
            </div>
            <div className={`whitespace-pre-wrap ${vertical ? 'base-full w-full' : 'base-1/2 w-1/2'} text-gray-500`}>{value}</div>
        </div>
    )
}

export default KeyValue