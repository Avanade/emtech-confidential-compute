import { AddIcon, ItemIcon, ListIcon } from "@/components/document/Icon";
import ListView from "@/components/document/ListView";
import IconView from "@/components/document/IconView";
import ScreenChecker from "@/components/ScreenChecker";
import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Document() {
    const items = [
        {id : 1, fileName : 'First.doc'},
        {id : 2, fileName : 'Second.xls'},
        {id : 3, fileName : 'Third.png'},
        {id : 4, fileName : 'Fourth.pdf'},
        {id : 5, fileName : 'Fifth.pdf'},
        {id : 6, fileName : 'Sixth.pdf'},
        {id : 7, fileName : 'Seventh.pptx'},
        {id : 8, fileName : 'Eigth.doc'},
        {id : 9, fileName : 'Ninth.xlsm'},
        {id : 10, fileName : 'Tenth.jpeg'},
        {id : 11, fileName : 'Eleventh.doc'},
        {id : 12, fileName : 'Twelfth.docx'},
        {id : 13, fileName : 'Thirteenth.pdf'},
        {id : 14, fileName : 'Fourteenth.png'},
        {id : 15, fileName : 'Fifthteenth.doc'},
        {id : 16, fileName : 'Sixteenth.pdf'},
        {id : 17, fileName : 'Seventeenth.pdf'},
        {id : 18, fileName : 'Eigteenth.pptx'},
        {id : 19, fileName : 'Nineteenth.png'},
        {id : 20, fileName : 'Twentieth.xlm'},
    ];

    const [selectedId, setSelectedId] = useState<number>(0);
    const [selectedView, setSelectedView] = useState<'Icon' | 'List'>('Icon');

    const handleSelect = (id : number) => {
        setSelectedId(id);
    }

    const selectView = (view) => {
        setSelectedView(view);
    }

    const View = ({viewType, items, selectedId, handleSelect}) => {
        switch (viewType) {
            case 'Icon':
                return <IconView items={items} selectedId={selectedId} handleSelect={handleSelect}/>
            case 'List':
                return <ListView items={items} selectedId={selectedId} handleSelect={handleSelect}/>
        }
    }

    return (<>
        <ScreenChecker />
        <div className="p-10">{/* <<<<--- PARENT  */}
            <div className="relative w-full">
                <div className="flex justify-end space-x-1 absolute right-0">
                    <div onClick={() => selectView('List')}><ListIcon fill="#0759a7" color={selectedView == 'List' ? 'white' : '#0759a7'} fillOpacity={selectedView == 'List' ? '1' : '0.1'} /></div>
                    <div onClick={() => selectView('Icon')}><ItemIcon fill="#0759a7" color={selectedView == 'Icon' ? 'white' : '#0759a7'} fillOpacity={selectedView == 'Icon' ? '1' : '0.1'} /></div>
                </div>
                <div>
                    <span className="text-2xl text-blue-800">Latest</span>
                    <div className="mt-5">
                        {/* ITEM */}
                            {/* <IconView items={items} selectedId={6} /> */}
                        {/* LIST */}
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex space-x-5"><span className="text-2xl text-blue-800">Documents</span><AddIcon color="#0759A7" fill="#0759a7" fillOpacity="0.1"/></div>
                    <div className="mt-5">
                        <View viewType={selectedView} items={items} selectedId={selectedId} handleSelect={handleSelect}/>
                    </div>
                </div>
            </div>           
        </div>
    </>);
}
