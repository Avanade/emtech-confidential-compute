import { AddIcon, ItemIcon, ListIcon } from "@/components/documents/Icons";
import Item from "@/components/documents/Item";
import ScreenChecker from "@/components/ScreenChecker";

export default function Index() {
    const items = [
        {id : 1, fileName : 'First.doc'},
        {id : 2, fileName : 'Second.xls'},
        {id : 3, fileName : 'Third.png'},
        {id : 4, fileName : 'Fourth.pdf'},
        {id : 5, fileName : 'Fifth.pdf'},
        {id : 6, fileName : 'Fifth.pdf'},
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
    ]

    return (<>
        <ScreenChecker />
        <div className="p-10">{/* <<<<--- PARENT  */}
            
        </div>
    </>);
}
