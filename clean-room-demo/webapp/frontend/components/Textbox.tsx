import React from "react"

export interface Props {
    //REQUIRED
    id : string,
    name : string,
    value : string,

    onChange? : any,

    preicon? : any,
    disabled? : boolean,
    required? : boolean,
    invalid? : boolean,

    type : "text" | "password" | "email"
}

export default function Textbox(props : Props) {

    const newProps  = {
        id: props.id,
        name: props.name,
        value: props.value,

        onChange : props.onChange,

        preicon : props.preicon,
        disabled: props.disabled || false,

        invalid :  props.invalid || false,

        type: props.type || "text",
    };

    // console.log(newProps);

    return (<>
            <label className={`relative ${newProps.invalid ? 'border-red-500 text-red-500' : ''} focus-within:text-gray-600 m-1 block`}>

                {/* {newProps.preicon == undefined ? '' : React.cloneElement(newProps.preicon, { className: "pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" })} */}
                <newProps.preicon className={`pointer-events-none w-6 h-3/5 absolute top-1/2 transform -translate-y-1/2 left-3`} />
                <input 
                    type={newProps.type} 
                    name={newProps.name}
                    placeholder={newProps.name}
                    id={newProps.id}
                    value={newProps.value}
                    onChange={(e) => newProps.onChange(e.target.value)}

                    className={`form-input w-full border ${newProps.invalid ? 'border-red-500 text-red-500 placeholder:text-red-500' : 'border-gray-500 text-gray-500'} py-1 px-3 bg-white placeholder-gray-400 ${newProps.preicon == undefined ? '' : 'pl-12'} appearance-none block focus:outline-none`}
                    />
            </label>
    </>);
}