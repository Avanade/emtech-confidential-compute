import { AddIcon, ItemIcon, ListIcon } from "./Icons"
import Item, { ItemProps } from "./Item"

interface Props {
    viewType : 'Table' | 'Tiles',
    items : ItemProps[],
}

const defaultProps : Props = {
    viewType: "Table",
    items: []
}

const List = (props : Props) => {
    const { viewType, items } = {...defaultProps, ...props};

    return (<>
        <div className="relative w-full">
            <div className="flex justify-end space-x-1 absolute right-0">
                <ListIcon />
                <ItemIcon />
            </div>
            <div>
                <span className="text-2xl text-blue-800">Latest</span>
                <div className="mt-5">
                    {/* ITEM */}
                    <div className="grid grid-cols-10 gap-3">
                        <Item id={1} fileName={"FIRST.doc"} isSelected={false} />
                        <Item id={2} fileName={"SECOND.doc"} isSelected={false} />
                    </div>
                    {/* LIST */}
                </div>
            </div>
            <div className="mt-10">
                <div className="flex space-x-5"><span className="text-2xl text-blue-800">Documents</span><AddIcon /></div>
                <div className="mt-5">
                    {/* ITEM */}
                    <div className="grid grid-cols-10 gap-3">
                        {items.map(({id, fileName}) => {return <Item id={id} fileName={fileName} isSelected={false} />})}
                    </div>
                    {/* LIST */}
                </div>
            </div>
        </div>
    </>)
}