import { IDocument } from "@/lib/interface/document";
import { PencilIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import KeyValue from "./KeyValue";
import Modal from "./Modal";
import PopupButton from "./PopupButton";


const DocProps:NextPage<{document:IDocument}> = (context) => {
    const [data, setData] = useState<IDocument>(context.document)
    const propertyKeys = Object.keys(data.properties)
    const [modalTags, setModalTags] = useState(false)
    const [modalShared, setModalShared] = useState(false)
    const [modalDescription, setModalDescription] = useState(false)

    const updateDescription = (v) => {
        setData(prev => ({...prev,description:v}))
    }

    return (
        <div className="divide-y-[1px]">
            <div className="m-3 my-5">
                {
                    propertyKeys.map((k,i) => (
                        <KeyValue key={i} name={k} value={data.properties[k]}></KeyValue>
                    ))
                }
            </div>
            <div className="m-3 my-5">
                <KeyValue name="Description" value={data.description} vertical
                    action={<>
                        <Button textLayout onClick={()=>setModalDescription(true)}><PencilIcon width={15} className="text-primary"/></Button>
                        {/* <PopupButton noBackground popupPosition="left" label={<PencilIcon width={15} className="text-primary"/>}></PopupButton> */}
                        <Modal title="Description" persistent visible={modalDescription} onClose={()=>setModalDescription(false)} width="md">
                            <div className="flex flex-col">
                                <div>
                                    <textarea cols={78} rows={5} value={data.description} className="border-2" onChange={(e)=>updateDescription(e.target.value)}></textarea>
                                </div>
                                <div className="self-center">
                                    <Button className="mx-1" onClick={()=>setModalDescription(false)}>Cancel</Button>
                                    <Button className="mx-1">Save</Button>
                                </div>
                            </div>
                        </Modal>
                        </>}
                ></KeyValue>
            </div>
            <div className="m-3 my-5">
                <KeyValue name="Shared With" vertical value={
                data.sharedWith.map((n,i) => (
                    <Avatar letter={n.name.substring(0,1)} className="mr-1"></Avatar>  
                ))
                }
                action={<>
                    <Button textLayout onClick={()=>setModalShared(true)}><PencilIcon width={15} className="text-primary"/></Button>
                    {/* <PopupButton noBackground popupPosition="left" label={<PencilIcon width={15} className="text-primary"/>}></PopupButton> */}
                    <Modal title="Shared With" persistent visible={modalShared} onClose={()=>setModalShared(false)}>
                        Shared With
                        {/* Use 'SharedWith.tsx' component */}
                    </Modal>
                    </>}>
                </KeyValue>
            </div>
            <div className="m-3 my-5">
                <KeyValue name="Tags" vertical value={
                data.tags.map((t,i)=>(
                    <Button small className="mr-1 bg-amber-400">{t}</Button>
                ))
                }
                action={<>
                    <Button textLayout onClick={()=>setModalTags(true)}><PencilIcon width={15} className="text-primary"/></Button>
                    {/* <PopupButton noBackground popupPosition="left" label={<PencilIcon width={15} className="text-primary"/>}></PopupButton> */}
                    <Modal title="Tags" visible={modalTags} onClose={()=>setModalTags(false)}>
                        Tags
                    </Modal>
                    </>}
                ></KeyValue>
            </div>
        </div>
    )
}

export default DocProps