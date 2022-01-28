import Modal from "../Modal";

const ShareWithModal = ({visible, onClose} : {visible : boolean, onClose : any}) => {
    return (<Modal title={"Share with"} visible={visible} onClose={onClose} persistent={true} width="md">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <input className="border border-gray-300 h-10 w-full sm:w-10/12 px-3" placeholder="Email, comma separated"/>
            <button className="bg-blue-900 text-white h-10 w-full sm:w-2/12">SEND</button>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        </div>
    </Modal>);
}

export default ShareWithModal;