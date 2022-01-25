import { NextPage } from "next"

const Loading:NextPage = () => {
    return (
        <div className="flex animate-spin place-content-center">
            {/* w-16 h-16 border-4 border-blue-400 border-dashed rounded-full */}
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37.5009" cy="6.79995" r="6.01089" fill="#0759A7"/>
                <circle cx="15.7766" cy="15.6574" r="6.01089" fill="#0759A7"/>
                <circle cx="6.91897" cy="37.4035" r="6.01089" fill="#0759A7"/>
                <circle cx="15.7766" cy="59.1496" r="6.01089" fill="#0759A7"/>
                <circle cx="37.5009" cy="68.007" r="6.01089" fill="#0759A7"/>
                <circle cx="59.2228" cy="59.1496" r="6.01089" fill="#0759A7"/>
                <circle cx="68.0805" cy="37.4035" r="6.01089" fill="#0759A7"/>
            </svg>

        </div>
    )
}

export default Loading