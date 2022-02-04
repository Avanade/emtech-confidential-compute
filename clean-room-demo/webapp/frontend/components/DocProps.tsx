import { IDocument } from "@/lib/interface/document";
import { PencilIcon, PlusIcon, HashtagIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import ShareWithModal from "./document/ShareWithModal";
import KeyValue from "./KeyValue";
import Modal from "./Modal";
import PopupButton from "./PopupButton";
import Textbox from "./Textbox";


const DocProps:NextPage<{document:IDocument}> = (context) => {
    const [data, setData] = useState<IDocument>(context.document)
    const propertyKeys = Object.keys(data.properties)
    const [modalTags, setModalTags] = useState(false)
    const [modalShared, setModalShared] = useState(false)
    const [modalDescription, setModalDescription] = useState(false)
    const [newTag, setNewTag] = useState("")
    const [newTagExists, setNewTagExists] = useState(false)

    const updateDescription = (v) => {
        setData(prev => ({...prev, description:v}))
    }

    const removeTag = (n) => {
        setData(prev => ({...prev, tags:data.tags.filter(v=>v!=n)}))
    }

    const addTag = () => {
        if(!data.tags.map(v=>{return v.toLowerCase()}).includes(newTag.toLowerCase())) {
            let tag = data.tags
            tag.push(newTag)
            // console.log('adding tag: ' + newTag)
            setData(prev => ({...prev, tags:tag}))
            setNewTag('')
        } else {
            console.log('existing')
            setNewTagExists(true)
        }
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
                    <Avatar key={i} letter={n.name.substring(0,1)} className="mr-1"></Avatar>  
                ))
                }
                action={<>
                    <Button textLayout onClick={()=>setModalShared(true)}><PencilIcon width={15} className="text-primary"/></Button>
                    <ShareWithModal visible={modalShared} onClose={()=>{setModalShared(false)}}></ShareWithModal>
                    </>}>
                </KeyValue>
            </div>
            <div className="m-3 my-5">
                <KeyValue name="Tags" vertical value={
                data.tags.map((t,i)=>(
                    <span key={i}>
                        <Button small className="bg-amber-400">{t}</Button>
                        <Button small textLayout className="bg-amber-400 mr-1 px-1 hover:bg-cyan-800" onClick={()=>removeTag(t)}>X</Button>
                    </span>
                ))
                }
                action={<>
                    {/* <PopupButton noBackground popupPosition="left" label={<PlusIcon width={15} className="text-primary"/>} className=""></PopupButton> */}
                    <Button textLayout onClick={()=>setModalTags(true)}><PlusIcon width={15} className="text-primary"/></Button>
                    <Modal title="Add Tag" visible={modalTags} onClose={()=>setModalTags(false)}>
                        <div className="flex flex-col">
                            <div>
                                <Textbox errorMessage="" name="Enter Tag" invalid={newTagExists} value={newTag} type="text" onChange={(e)=>{setNewTag(e.target.value); setNewTagExists(false)}} PreIcon={HashtagIcon}/>
                            </div>
                            {/* Line below can be removed. Use invalidMessage property on Textbox when available. */}
                            {newTagExists ? <div className="text-xs text-red-500 py-1"> *This tag is already existing.</div> : null}
                            <div className="self-center">
                                <Button onClick={()=>addTag()}>Save</Button>
                            </div>
                        </div>
                    </Modal>
                    </>}
                ></KeyValue>
            </div>
        </div>
    )
}

export default DocProps