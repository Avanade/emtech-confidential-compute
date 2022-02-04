import Link from "next/link";
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'

export function Breadcrumb(props) {
    return (
        <div className="flex flex-row">
            <div className='basis-1/3' >
                <Link href={props.link}>
                    <a className="underline text-primary"    >
                        <div className="flex flex-row">
                            <div >
                                <ArrowNarrowLeftIcon width={25} />
                            </div>
                            <div >
                                <span className="px-1">
                                    {props.label}
                                </span>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='basis-1/3 place-content-center text-blue-900 align-center text-center'>
                {props.title}
            </div>
            <div className='basis-1/3 self-end align-end text-end text-right'>
                {props.action}
            </div>
        </div>
    )
}
