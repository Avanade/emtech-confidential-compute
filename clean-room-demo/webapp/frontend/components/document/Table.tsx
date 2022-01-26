import { DocumentIcon, ExcelIcon, IconProps, ImageIcon, PdfIcon, PowerpointIcon } from "./Icon";
import IconType from "./IconType";

interface Props {
    items : { id:number, fileName:string }[]
    selectedId? : number,
    handleSelect? : any
}

const defaultProps = {
    items : [],
    selectedId : 10
}

const Table = (props : Props) => {
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
                        {items.map(({id, fileName} : { id : number, fileName : string}) => {
                        const [name, extension] = fileName.split('.');
                        return <tr key={id} className={`${selectedId == id ?  'bg-blue-50 text-blue-800' : 'text-gray-500'}  border-b border-gray-100 border-dotted`} onClick={() => handleSelect(id)}>
                            <td className="py-1 align-middle">{id}</td>
                            <td className="py-1 align-middle">
                                <IconType extension={extension} width={30} height={30} />
                            </td>
                            <td className="py-1 align-middle">{name}</td>
                            <td className="py-1 align-middle">01/01/2022</td>
                            <td className="py-1 align-middle">Yes</td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>;
}

export default Table;