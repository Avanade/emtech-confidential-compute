import IconType from "./IconType";

interface ItemProps {
    name : string,
    extension : string,
    selected : boolean
}

export default function IconItem(props : ItemProps) {
    const { name, extension, selected } = props;

    return (<div className={`w-24 ${selected ? 'text-blue-800' : 'text-black'}`}>
        <div className={`relative h-24 flex justify-center ${selected ? 'bg-blue-100' : ' bg-gray-200 '}`}>
            <div className="m-auto"><IconType extension={extension} color={selected ? '#0759a7' : '#59595C'} /></div>
        </div>
        <p className="relative truncate text-xs">{name}</p>       
    </div>);
}