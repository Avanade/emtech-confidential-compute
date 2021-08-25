import { useRouter } from "next/router";
import BasicPage from "@/components/BasicPage";
import { DocumentIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function ViewDocument() {
  const router = useRouter();
  const { did } = router.query;

  return (
    <BasicPage title="View Document" icon={DocumentIcon}>
      Document: {did}
      <p>
        <Link href="/document/2/annotate">
          <a className="underline">Dummy next step: annotate</a>
        </Link>
      </p>
    </BasicPage>
  );
}
