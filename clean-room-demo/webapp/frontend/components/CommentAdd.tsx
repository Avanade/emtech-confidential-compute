import { NextPage } from "next";
import Button from "./Button";

const CommentAdd:NextPage<{}> = (content) =>{
    return (
        <>
        <div className="flex flex-col">
            <div>
                <textarea name="comment" id="comment"
                    cols={30} rows={3}
                    className="px-2"
                    placeholder="Enter comment"></textarea>
            </div>
            <div className="place-content-center">
                <Button>Save</Button>
            </div>
        </div>
        </>
    )
}

export default CommentAdd