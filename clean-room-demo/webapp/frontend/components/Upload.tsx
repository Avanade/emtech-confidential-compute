import { NextPage } from "next";
import { useEffect, useState } from "react";
import {ArrowDownIcon, DocumentIcon, RefreshIcon, XIcon} from '@heroicons/react/outline'
import Textbox from "@/components/Textbox";
import Button from "@/components/Button";

const Upload:NextPage<{onUpload:any, isUploading:boolean}> = (context) => {
    const [file, setFile] = useState<File>(null)
    const [highlight, setHighlight] = useState(false)
    const [documentTitle, setDocumentTitle] = useState("")
    const [filename, setFilename] = useState("")
    const isUploading = context.isUploading || false

    let removeDefaultsEvents = ['dragenter', 'dragover', 'dragleave', 'drop']
    let highlightEvents = ['dragenter', 'dragover']
    let unhighlightEvents = ['dragleave', 'drop']

    const removeFile = () => {
        setFile(null)
        setDocumentTitle("")
        setFilename("")
    }

    const handleFiles = (f) => {
        let fArray = ([...f])
        setFile(fArray[0])
        setDocumentTitle(fArray[0].name.replace(/\.[^/.]+$/, ""))
        setFilename(fArray[0].name)
      }

    const preventDefaults = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const fnhighlight = () => {
        setHighlight(true)
    }
    
    const fnunhighlight = () => {
        setHighlight(false)
    }
    
    const handleDrop = (e) => {
        let dt = e.dataTransfer
        let files = dt.files
        handleFiles(files)
    }
    
    useEffect(()=>{
        let dropArea = document.getElementById("drop-area")
        removeDefaultsEvents.forEach(eventName=>{
            dropArea.addEventListener(eventName, preventDefaults, false)
        })

        highlightEvents.forEach(eventName => {
            dropArea.addEventListener(eventName, fnhighlight, false)
        });
        unhighlightEvents.forEach(eventName => {
            dropArea.addEventListener(eventName, fnunhighlight, false)
        });

        dropArea.addEventListener('drop', handleDrop, false)


    },[])
    return (
        <>
            <Textbox disabled={isUploading} PreIcon={DocumentIcon} name='Document Title' value={documentTitle} type="text" onChange={(e:any)=>setDocumentTitle(e.target.value)}  errorMessage=""></Textbox>
            <div id="drop-area" className={`border-2 my-3  border-primary
                w-full p-5
                ${highlight ? 'border-solid' : 'border-dashed'}
                ${filename ? 'bg-sky-100' : null}
                `}>
                <form className="my-form mb-5">
                    <div className={`flex flex-col text-center place-items-center ${filename ? 'hidden' : 'block'}`}>
                        <ArrowDownIcon className="text-primary my-4" width={40}/>
                        <div className="base-full w-full"><label className="text-primary text-xl" htmlFor="fileElem">Choose a file</label></div>
                        <div className="base-full w-full"><label className="text-gray-500 text-xl" htmlFor="fileElem">or Drag and Drop here</label></div>
                        <input type="file" id="fileElem" accept="*" className="hidden" onChange={(e)=>handleFiles(e.target.files)}/> {/* onChange={handleFiles(this.files)}/> */}
                    </div>
                    <div className={`flex flex-col text-sky-900 text-center place-items-center ${filename ? 'block' : 'hidden'}`}>
                        <div className="text-sm">File selected</div>
                        <div className="flex m-3">
                            {
                                !file ? null :
                                <div className="flex flex-col">
                                    <div>Filename: <span className="font-bold">{file.name}</span></div>
                                    <div>Size: <span className="font-bold">{(file.size/1024).toPrecision(4)} KB</span></div>
                                    <div>Type: <span className="font-bold">{file.type}</span></div>
                                </div>
                            }
                        </div>
                        <div>
                            {
                                isUploading ?
                                    <div className="flex">
                                        <RefreshIcon width={25} className="animate-spin"/>
                                        <div>Uploading</div>
                                    </div> :
                                    <div className="bg-darkblue py-2 px-4 text-white" onClick={() => removeFile()}>Remove Item</div>
                            }
                        </div>
                    </div>
                </form>
            </div>
            <Textbox disabled={isUploading} PreIcon={DocumentIcon} name='Filename' value={filename} type="text" onChange={(e:any)=>setFilename(e.target.value)} errorMessage=""></Textbox>
            <div className="text-right mt-3"><Button disabled={isUploading || !file} onClick={()=>context.onUpload(file)}>Upload</Button></div>
        </>
    )
}

export default Upload