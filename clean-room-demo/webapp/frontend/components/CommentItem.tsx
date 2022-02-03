import { IComment } from "@/lib/interface/document"
import { NextPage } from "next"
import Avatar from './Avatar'

const CommentItem:NextPage<{comment:IComment, className?:string, smaller?:boolean}> = (context) => {
    const {id, name, date, body} = context.comment
    const smaller = context.smaller || false
    const initial = name.substring(0,1)

    return (
        <>
            <div className={`flex flex-col ${context.className}`}>
                <div className="flex flex-row">
                    <div className="base-4/6 w-4/6">
                        <div className="flex flex-row">
                            <Avatar letter={initial} className="mr-3" smaller={smaller}></Avatar>
                            <div className={`text-primary font-medium  ${smaller ? 'text-sm' : 'text-md'}`}>{name}</div>
                        </div>
                    </div>
                    <div className="base-2/6 w-2/6 text-right text-sm font-thin" suppressHydrationWarning>{date.toLocaleDateString()}</div>
                </div>
                <div><p className={`text-justify font-light ${smaller ? 'text-xs' : 'text-sm'}`}>{body}</p></div>
                <div className="w-full">{context.children}</div>
            </div>
        </>
    )

}

export default CommentItem