import Link from "next/link";
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'

export function Breadcrumb(props) {
    return (
        <div className="flex flex-row justify-between m-3">
            <div>
                <Link href={props.link}>
                    <a className="text-primary"    >
                        <div className="flex flex-row">
                            <div >
                                <ArrowNarrowLeftIcon width={25} />
                            </div>
                            <div >
                                <span className="text-bodyprimary">
                                    {props.label}
                                </span>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='text-blue-900'>
                {props.title}
            </div>
            <div>
                <div>{props.action}</div>
            </div>
        </div>
    )
}
