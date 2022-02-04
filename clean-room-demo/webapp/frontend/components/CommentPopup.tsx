import { NextPage } from "next"
import CommentItem from "./CommentItem"
import {DotsHorizontalIcon} from "@heroicons/react/outline"
import { useState } from "react"
import Button from "@/components/Button"
import PopupButton from "./PopupButton"
import { IComment } from "@/lib/interface/document"

const CommentPopup:NextPage<{comment:IComment, smaller?:boolean}> = (context) => {
    const {comment} = context
    const smaller = context.smaller || false
    const [reply, setReply] = useState("")
    return (
        <>
            <div className="flex flex-col p-3 bg-zinc-100">
                <div className="self-end">
                    <PopupButton popupPosition="left" label={<DotsHorizontalIcon width={20} className="text-primary"/>} noBackground>
                        <ul className="">
                            <li className="hover:bg-primary hover:text-white px-3">Edit</li>
                            <li className="hover:bg-primary hover:text-white px-3">Delete</li>
                        </ul>
                    </PopupButton>
                    
                </div>
                <div className="">
                    <CommentItem comment={comment} smaller={smaller}/>
                </div>
                <div className="m-2"><hr className="border-t-2" /></div>
                <div className="mx-4">
                    <textarea id="Reply" name="Reply" value={reply} onChange={(e)=>setReply(e.target.value)} className="bg-zinc-100 w-full focus:border-0 text-sm" placeholder="Reply using @ to notify"/>
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