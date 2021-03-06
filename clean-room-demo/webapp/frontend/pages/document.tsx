import { AddIcon, ItemIcon, ListIcon } from "@/components/document/Icons";
import ListView from "@/components/document/ListView";
import IconView from "@/components/document/IconView";
import { useState } from "react";
import Modal from "@/components/Modal";
import Upload from "@/components/Upload";

interface Item {
    id : number;
    fileName : string;
    creationDate : Date;
    active : boolean;
}

export default function Document() {
    // SAMPLE DATA FOR LATEST DOCUMENTS
    const latestItems = [
        {id : 1, fileName : 'First.doc', creationDate : new Date(), active : false, },
        {id : 2, fileName : 'Second.xls', creationDate : new Date(), active : false}
    ]

    // SAMPLE DATA FOR DOCUMENTS
    const items = [
        {id : 1, fileName : 'First.doc', creationDate : new Date(), active : false},
        {id : 2, fileName : 'Second.xls', creationDate : new Date(), active : false},
        {id : 3, fileName : 'Third.png', creationDate : new Date(), active : true},
        {id : 4, fileName : 'Fourth.pdf', creationDate : new Date(), active : false},
        {id : 5, fileName : 'Fifth.pdf', creationDate : new Date(), active : false},
        {id : 6, fileName : 'Sixth.pdf', creationDate : new Date(), active : false},
        {id : 7, fileName : 'Seventh.pptx', creationDate : new Date(), active : true},
        {id : 8, fileName : 'Eigth.doc', creationDate : new Date(), active : false},
        {id : 9, fileName : 'Ninth.xlsm', creationDate : new Date(), active : false},
        {id : 10, fileName : 'Tenth.jpeg', creationDate : new Date(), active : false},
        {id : 11, fileName : 'Eleventh.doc', creationDate : new Date(), active : false},
        {id : 12, fileName : 'Twelfth.docx', creationDate : new Date(), active : true},
        {id : 13, fileName : 'Thirteenth.pdf', creationDate : new Date(), active : false},
        {id : 14, fileName : 'Fourteenth.png', creationDate : new Date(), active : false},
        {id : 15, fileName : 'Fifthteenth.doc', creationDate : new Date(), active : false},
        {id : 16, fileName : 'Sixteenth.pdf', creationDate : new Date(), active : true},
        {id : 17, fileName : 'Seventeenth.pdf', creationDate : new Date(), active : false},
        {id : 18, fileName : 'Eigteenth.pptx', creationDate : new Date(), active : false},
        {id : 19, fileName : 'Nineteenth.png', creationDate : new Date(), active : false},
        {id : 20, fileName : 'Twentieth.xlm', creationDate : new Date(), active : true}
    ];

    const [selectedId, setSelectedId] = useState<number>(0);
    const [selectedView, setSelectedView] = useState<'Icon' | 'List'>('Icon');
    const [modalAdd, setModalAdd] = useState(false)
    const [isUploading, setIsUploading] = useState(false)

    const handleSelect = (id : number) => {
        setSelectedId(id);
    }

    const selectView = (view) => {
        setSelectedView(view);
    }

    const View = ({viewType, items, selectedId, handleSelect} : {viewType : 'Icon' | 'List', items : Item[], selectedId : number, handleSelect : any}) => {
        switch (viewType) {
            case 'Icon':
                return <IconView items={items} selectedId={selectedId} handleSelect={handleSelect}/>
            case 'List':
                return <ListView items={items} selectedId={selectedId} handleSelect={handleSelect}/>
        }
    }

    const onUpload = (file:File) => {
        setIsUploading(true)
        console.log('File selected: ', file)
        // TODO: Add upload functionality to API
    }

    const closeModalAdd = () => {
        setModalAdd(false)
        setIsUploading(false)
    }
    return (<>
        <div className="p-10">{/* <<<<--- PARENT CONTAINER */}
            <div className="relative w-full">
                <div className="flex justify-end space-x-1 absolute right-0">
                    <div onClick={() => selectView('List')}><ListIcon fill="#0759a7" color={selectedView == 'List' ? 'white' : '#0759a7'} fillOpacity={selectedView == 'List' ? '1' : '0.1'} /></div>
                    <div onClick={() => selectView('Icon')}><ItemIcon fill="#0759a7" color={selectedView == 'Icon' ? 'white' : '#0759a7'} fillOpacity={selectedView == 'Icon' ? '1' : '0.1'} /></div>
                </div>
                <div>
                    <span className="relative text-2xl text-blue-800">Latest</span>
                    <div className="mt-5">
                        <View viewType={selectedView} items={latestItems} selectedId={selectedId} handleSelect={handleSelect}/>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex space-x-5"><span className="text-2xl text-blue-800">Documents</span><span onClick={()=>setModalAdd(true)}><AddIcon color="#0759A7" fill="#0759a7" fillOpacity="0.1" /></span></div>
                    <div className="mt-5">
                        <View viewType={selectedView} items={items} selectedId={selectedId} handleSelect={handleSelect}/>
                    </div>
                </div>
            </div>   
            <Modal title="Add Document" visible={modalAdd} persistent onClose={()=>closeModalAdd()} width="md" >
                <Upload onUpload={(f:File)=>onUpload(f)} isUploading={isUploading}></Upload>
            </Modal>        
        </div>
    </>);
}
