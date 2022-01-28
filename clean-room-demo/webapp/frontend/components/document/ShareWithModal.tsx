import Modal from "../Modal";

const ShareWithModal = ({visible, onClose} : {visible : boolean, onClose : any}) => {
    return (<Modal title={"Share with"} visible={visible} onClose={onClose} persistent={true} width="md">
        <div className="flex sm: space-y-3 p-3">
            <div className="bg-green-500">INPUT</div>
            <div className="bg-blue-500">BUTTON</div>
            {/* <input className="border border-gray-300 h-10 w-full sm:w-10/12" placeholder="Email, comma separated"/>
            <button className="bg-blue-900 text-white h-10 w-full sm:w-2/12">SEND</button> */}
        </div>
    </Modal>);
}

export default ShareWithModal;