import { NextPage } from "next";
import Button from "./Button";
import CommentItem, {IComment} from './CommentItem'


// sample data
let d = new Date('01/25/2022')
let comments:IComment[] = [
    {
        id: 1,
        name: 'Rainier',
        date: d,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        id: 2,
        name: 'Dennis',
        date: d,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        id: 3,
        name: 'Jerrico',
        date: d,
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
]

const Comments:NextPage = () => {
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