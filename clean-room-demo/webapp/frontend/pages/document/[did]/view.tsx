import { useRouter } from "next/router";
import BasicPage from "@/components/BasicPage";
import { DocumentIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Comments from "@/components/Comments";
import { useState } from "react";
import Button from "@/components/Button";
import CommentItem from "@/components/CommentItem";
import CommentPopup from "@/components/CommentPopup";
import PopupButton from "@/components/PopupButton";
import CommentAdd from "@/components/CommentAdd";
import Modal from "@/components/Modal";
import DocProps from "@/components/DocProps";
import KeyValue from "@/components/KeyValue";
import Avatar from "@/components/Avatar";
import { IComment, IDocument,  } from "@/lib/interface/document";

export default function ViewDocument() {
  const router = useRouter();
  const { did } = router.query;
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [docDtlSidebar, setDocDtlSidebar] = useState(false)

  // sample data
  let d = new Date('01/25/2022')

  let document:IDocument = {
    properties: {
      id: "1",
      filename:"Ledger Document.pdf",
      type: "Adobe Acrobat Document",
      ledger: "Ledger",
      size: "10 kb",
      created: "12/12/2021"
    },
    description: `This is the document's description.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    sharedWith: [
      {username: 'rainier.mendiola', name: 'Rainier Mendiola'},
      {username: 'dennis.delamida', name: 'Dennis Delamida'},
      {username: 'jerrico.delacruz', name: 'Jerrico Dela Cruz'}
    ],
    tags: ['invoice', 'expenses', 'operations'],
    comments: [
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
  }

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
              document.comments.map((c,i)=>(
                <PopupButton key={i} label={(i+1).toString()} pointer="down" popupPosition="down" className="ml-5">
                  <CommentPopup comment={c}></CommentPopup>
                  {/* <div>text</div> */}
                </PopupButton>
              ))
            }
          </div>
          <div className="mt-3">
            <PopupButton label="Add comment" persistent closeButton>
              <CommentAdd></CommentAdd>
            </PopupButton>
          </div>
          <div className="mt-3">
            <Button onClick={()=>setModalShow(true)}>Show Modal</Button>
            <Modal title="Add Comment" visible={modalShow} onClose={()=>setModalShow(false)} persistent >
              Test modal
            </Modal>
          </div>
          <div className="mt-3">
              <Button onClick={()=>setDocDtlSidebar(!docDtlSidebar)}>Show Document Details</Button>
              <Sidebar title={document.properties.filename} visible={docDtlSidebar} onClose={()=>setDocDtlSidebar(false)}>
                  <DocProps document={document}></DocProps>
              </Sidebar>
          </div>
        </div>
      </BasicPage>
      <Sidebar title="Comments" visible={sidebarVisible} onClose={()=>setSidebarVisible(false)}>
        <Comments comments={document.comments}></Comments>
      </Sidebar>
    </div>
  );
}
