import { NextPage } from "next"
import Avatar from './Avatar'
import Button from './Button'

export interface IComment {
    id: number,
    name: string,
    date: Date,
    body: string
}

const CommentItem:NextPage<{comment:IComment, className?:string}> = (context) => {
    const {id, name, date, body} = context.comment
    const initial = name.substring(0,1)

    return (
        <>
            <div className={`flex flex-col ${context.className}`}>
                <div className="flex flex-row">
                    <div className="base-4/6 w-4/6">
                        <div className="flex flex-row">
                            <Avatar letter={initial} className="mr-3"></Avatar>
                            <div className="text-primary font-medium">{name}</div>

                        </div>
                    </div>
                    <div className="base-2/6 w-2/6 text-right font-thin" suppressHydrationWarning>{date.toLocaleDateString()}</div>
                </div>
                <div><p className="text-justify font-light text-sm">{body}</p></div>
                <div className="w-full">{context.children}</div>
            </div>
        </>
    )

}

export default CommentItem