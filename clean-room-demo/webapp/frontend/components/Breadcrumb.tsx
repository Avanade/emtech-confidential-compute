import Link from "next/link";
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'

export function Breadcrumb(props) {
    return (<>
        <div >
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
    </>)
}
