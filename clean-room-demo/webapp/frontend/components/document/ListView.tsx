import Link from "next/link";
import IconType from "./IconType";

interface Item {
    id : number;
    fileName : string;
    creationDate : Date;
    active : boolean;
}

interface Props {
    items : Item[]
    selectedId? : number,
    handleSelect? : any
}

const defaultProps = {
    items : [],
    selectedId : 10
}

const ListView = (props : Props) => {
    const { items, selectedId, handleSelect } = { ...defaultProps, ...props };

    return <div className="overflow-auto">
                <table className="table-auto w-full text-left">
                    <thead className="text-gray-600 border-b-2 border-dotted border-gray-100">
                        <tr>
                            <th className="pb-3">ID</th>
                            <th className="pb-3">TYPE</th>
                            <th className="pb-3">DOCUMENT NAME</th>
                            <th className="pb-3">CREATION DATE</th>
                            <th className="pb-3">ACTIVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(({id, fileName, creationDate, active} : Item) => {
                        const [name, extension] = fileName.split('.');
                        return <tr key={id} className={`${selectedId == id ?  'bg-blue-50 text-blue-800' : 'text-gray-500'}  border-b border-gray-100 border-dotted`} onClick={() => handleSelect(id)}>
                            <td className="py-1 align-middle">{id}</td>
                            <td className="py-1 align-middle">
                                <IconType extension={extension} width={30} height={30} />
                            </td>
                            <td className="py-1 align-middle"><Link href="/viewdoc">{name}</Link></td>
                            <td className="py-1 align-middle">{`${('0' + creationDate.getMonth() + 1).slice(-2)}/${creationDate.getDate()}/${creationDate.getFullYear()}`}</td>
                            <td className="py-1 align-middle">{active ? 'YES' : 'NO'}</td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>;
}

export default ListView;