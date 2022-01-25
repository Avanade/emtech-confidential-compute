import { NextPage } from "next";

const Button:NextPage<{onClick?:any, disabled?:boolean, small?:boolean}> = (context, ) =>{
    let text = context.children ? context.children : 'Button'
    let disabled = context.disabled || false
    let small = context.small || false
    return (
        <button onClick={context.onClick}
            className={`${!small ? 'px-4 py-2 font-medium' : 'px-2 py-1 font-light'} tracking-wide
                text-white text-xs capitalize
                transition-colors duration-200 transform bg-darkblue
                hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:ring-opacity-80
                disabled:bg-gray-300
                `}
            disabled={disabled}
            >
            {text}
        </button>
    )
}

export default Button