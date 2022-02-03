import { LockClosedIcon } from "@heroicons/react/outline";
import Avatar from "../Avatar";
import Modal from "../Modal";

const ShareWithModal = ({visible, onClose} : {visible : boolean, onClose : any}) => {
    return (<Modal title={"Share with"} visible={visible} onClose={onClose} persistent={true} width="md">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <input className="border border-gray-300 h-10 w-full sm:w-10/12 px-3" placeholder="Email, comma separated"/>
            <button className="bg-darkblue text-white h-10 w-full sm:w-2/12">SEND</button>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 py-3">
            <div className="flex w-full sm:w-8/12">
                <LockClosedIcon className="w-8 text-gray-700" />
                <span className="text-gray-700 text-left align-middle w-auto my-auto">Only people invited with the link</span>
            </div>
            <select className="w-full sm:w-4/12 border border-gray-300 h-10">
                <option>Option 1</option>
                <option>Option 2</option>
            </select>
        </div>
        <hr />
        <div className="flex py-3 align-middle mb-3">
            <Avatar letter="D" imgSrc="" className="w-9 h-9 pt-1 my-auto mr-3"/>
            <div className="flex flex-col">
                <span className="text-sm text-gray-800">Dominik (You)</span>
                <span className="text-sm text-gray-500">Owner</span>
            </div>
        </div>
    </Modal>);
}

export default ShareWithModal;