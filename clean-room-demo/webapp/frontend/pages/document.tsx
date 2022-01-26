import { AddIcon, ItemIcon, ListIcon } from "@/components/document/Icon";
import IconView from "@/components/document/IconView";
import ScreenChecker from "@/components/ScreenChecker";
import { useState } from "react";

export default function Index() {
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

    const [selectedId, setSelectedId] = useState(0);

    const handleSelect = (id : number) => {
        setSelectedId(id);
    }

    return (<>
        <ScreenChecker />
        <div className="p-10">{/* <<<<--- PARENT  */}
            <div className="relative w-full">
                <div className="flex justify-end space-x-1 absolute right-0">
                    <ListIcon />
                    <ItemIcon />
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
                    <div className="flex space-x-5"><span className="text-2xl text-blue-800">Documents</span><AddIcon /></div>
                    <div className="mt-5">
                        {/* ITEM */}
                            <IconView items={items} selectedId={selectedId} handleSelect={handleSelect} />
                        {/* LIST */}
                    </div>
                </div>
            </div>           
        </div>
    </>);
}
