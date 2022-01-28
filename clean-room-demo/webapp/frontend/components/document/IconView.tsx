import Item from "./IconItem";

interface Item {
    id : number;
    fileName : string;
}

interface Props {
    items : Item[]
    selectedId? : number,
    handleSelect? : any
}

const defaultProps = {
    items : [],
    selectedId : 0
}

const IconView = (props : Props) => {
    const { items, selectedId, handleSelect } = { ...defaultProps, ...props };

    return (<>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:grid-cols-5 lg:grid-cols-8">
            {items.map(({id, fileName}) => {
                const [name, extension] = fileName.split('.');
                return <div key={id} onClick={() => handleSelect(id)}>
                    <Item name={name} extension={extension} selected={id == selectedId} />
                </div>
            })}
        </div>
    </>)
}

export default IconView;