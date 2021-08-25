import BasicPage from "@/components/BasicPage";
import { IdentificationIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Authenticate() {
  return (
    <BasicPage title="Authorization Required" icon={IdentificationIcon}>
      You are required to provide physical identification to access this.
      <p>
        <Link href="/verifyface">
          <a className="underline">Dummy next step: verifyface</a>
        </Link>
      </p>
    </BasicPage>
  );
}
