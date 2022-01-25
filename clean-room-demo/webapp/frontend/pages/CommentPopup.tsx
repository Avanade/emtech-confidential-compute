import { NextPage } from "next"
import CommentItem, {IComment} from "../components/CommentItem"
import {DotsHorizontalIcon} from "@heroicons/react/outline"
import Textbox from "@/components/Textbox"
import { useState } from "react"
import Button from "@/components/Button"
// sample data
let d = new Date('01/25/2022')
let comment:IComment = {
        id: 1,
        name: 'Rainier',
        date: d,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
const CommentPopup:NextPage<{comment:IComment}> = () => {
    const [reply, setReply] = useState("")
    return (
        <>
            <div className="flex flex-col p-3 bg-zinc-100">
                <div className="self-end">
                    <Button textLayout><DotsHorizontalIcon width={25} className="text-primary"/></Button>
                </div>
                <div className="">
                    <CommentItem comment={comment}/>
                </div>
                <div className="m-2"><hr className="border-t-2" /></div>
                <div className="mx-4">
                    <textarea id="Reply" name="Reply" value={reply} className="bg-zinc-100 w-full focus:border-0" placeholder="Reply using @ to notify"/>
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="flex-1 flex-initial">
                            <Button className="mx-1">Cancel</Button>
                        </div>
                        <div className="flex-1 flex-initial">
                            <Button className="mx-1">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentPopup