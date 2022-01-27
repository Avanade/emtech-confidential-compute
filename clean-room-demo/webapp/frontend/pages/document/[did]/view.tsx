import { useRouter } from "next/router";
import BasicPage from "@/components/BasicPage";
import { DocumentIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Comments from "@/components/Comments";
import { useState } from "react";
import Button from "@/components/Button";
import CommentItem, {IComment} from "@/components/CommentItem";
import CommentPopup from "@/components/CommentPopup";
import PopupButton from "@/components/PopupButton";

export default function ViewDocument() {
  const router = useRouter();
  const { did } = router.query;
  const [sidebarVisible, setSidebarVisible] = useState(false)

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

  return (
    <div>

      <BasicPage title="View Document" icon={DocumentIcon}>
        Document: {did} 
        <p>
          <Link href="/document/2/annotate">
            <a className="underline">Dummy next step: annotate</a>
          </Link>
        </p>
        <div>
          <div>Sample usage on sidebar and popups</div>
          <Button  onClick={()=>setSidebarVisible(!sidebarVisible)}>Toggle Sidebar</Button>
          <div className="mt-3">
            {
              comments.map((c,i)=>(
                <PopupButton key={i} label={(i+1).toString()} pointer="down" popupPosition="down" className="ml-5">
                  <CommentPopup comment={c}></CommentPopup>
                  {/* <div>text</div> */}
                </PopupButton>
              ))
            }
          </div>
        </div>
      </BasicPage>
      <Sidebar title="Comments" visible={sidebarVisible} onClose={()=>setSidebarVisible(false)}>
        <Comments comments={comments}></Comments>
      </Sidebar>
    </div>
  );
}
