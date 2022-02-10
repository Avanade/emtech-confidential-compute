import { IComment } from "@/lib/interface/document";
import { NextPage } from "next";
import Button from "./Button";
import CommentItem from './CommentItem'


const Comments:NextPage<{comments?:IComment[]}> = (context) => {
    const {comments} = context
    const addReplyButton = (id) => {
        console.log(`Add reply is clicked on item id ${id}`)
    }
    return (
        <>
            {
                comments.map(item => (
                    <CommentItem key={item.id} comment={item} className="m-3 mb-5">
                        <div className="flex place-content-end">
                            <Button textLayout onClick={()=>addReplyButton(item.id)}>+ Add reply</Button>
                        </div>
                    </CommentItem>
                ))
            }
        </>
    )
}

export default Comments