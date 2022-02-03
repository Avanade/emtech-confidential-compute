import React, { ChangeEvent } from "react"

export interface Props {
    //REQUIRED
    name : string,
    value : string,

    //EVENT
    onChange(e : ChangeEvent<HTMLInputElement>) : void

    PreIcon? : any | undefined,
    disabled? : boolean,
    required? : boolean,
    invalid? : boolean,

    type : "text" | "password" | "email"

    //VALIDATION
    errorMessage : string,
}

export default function Textbox(props : Props) {

    const newProps  = {
        name: props.name,
        value: props.value,

        PreIcon : props.PreIcon,
        disabled: props.disabled || false,

        type: props.type || "text",

        errorMessage : props.errorMessage,

        //VALIDATION
        onChange : props.onChange,
    };

    return (<>
        <label className={`relative ${newProps.errorMessage != "" ? 'border-red-500 text-red-500' : ''} focus-within:text-gray-600 m-1 block`}>
            {newProps.PreIcon != undefined ? <newProps.PreIcon className={`pointer-events-none w-6 h-3/5 absolute top-1/2 transform -translate-y-1/2 left-1`} /> : ""}
            <input 
                type={newProps.type} 
                name={newProps.name}
                placeholder={newProps.errorMessage != "" ? newProps.errorMessage : newProps.name}
                value={newProps.value}
                onChange={e => newProps.onChange(e)}

                className={`form-input w-full border ${newProps.errorMessage != "" ? 'border-red-500 text-red-500 placeholder:text-red-500' : 'border-gray-500 text-gray-500'} py-1 px-3 bg-white placeholder-gray-400 appearance-none block focus:outline-none ${props.PreIcon != undefined ? "pl-7" : ""}`}
                />
            {/* {newProps.errorMessage != "" ? <span className="text-red-500 text-xs absolute top-8">{newProps.errorMessage}</span> : ""} */}
        </label>
    </>);
}