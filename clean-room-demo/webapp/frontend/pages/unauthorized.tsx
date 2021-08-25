import BasicPage from "@/components/BasicPage";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Unauthorized() {
  return (
    <BasicPage title="Unauthorized" icon={ShieldCheckIcon}>
      You are not authorized to access this.
      <p>
        <Link href="/authenticate">
          <a className="underline">Dummy next step: authenticate</a>
        </Link>
      </p>
    </BasicPage>
  );
}
