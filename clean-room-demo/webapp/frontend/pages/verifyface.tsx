import BasicPage from "@/components/BasicPage";
import { IdentificationIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function VerifyFace() {
  return (
    <BasicPage title="Facial Verification Required" icon={IdentificationIcon}>
      You must verify your face.
      <p>
        <Link href="/docstore/list">
          <a className="underline">Dummy next step: docstore</a>
        </Link>
      </p>
      <p>
        <Link href="/unauthorized">
          <a className="underline">Dummy next step: unauthorized</a>
        </Link>
      </p>
    </BasicPage>
  );
}
