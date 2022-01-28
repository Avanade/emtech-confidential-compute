import { NextPage } from "next";

const Button:NextPage<{onClick?:any, disabled?:boolean, small?:boolean, textLayout?:boolean, className?:string}> = (context, ) =>{
    let text = context.children ? context.children : 'Button'
    let disabled = context.disabled || false
    let small = context.small || false
    let textLayout = context.textLayout || false

    return (
        <button onClick={context.onClick}
            className={`${!small ? 'px-4 py-2 font-medium' : 'px-2 py-1 font-light'} tracking-wide
                ${!textLayout ? 'bg-darkblue text-white hover:bg-cyan-700' : 'text-darkblue px-0 hover:text-cyan-700'}
                text-xs capitalize
                transition-colors duration-200 transform
                focus:outline-none focus:ring focus:ring-cyan-700 focus:ring-opacity-80
                disabled:bg-gray-300
                ${context.className}
                `}
            disabled={disabled}
            >
            {text}
        </button>
    )
}

export default Button