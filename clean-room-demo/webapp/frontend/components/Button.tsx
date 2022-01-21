import { NextPage } from "next";

const Button:NextPage<{onClick?:any}> = (context) =>{
    let text = context.children ? context.children : 'Button'
    return (
        <button onClick={context.onClick} className="px-4 py-2 font-medium tracking-wide text-white text-xs capitalize transition-colors duration-200 transform bg-darkblue hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:ring-opacity-80">
            {text}
        </button>
    )
}

export default Button