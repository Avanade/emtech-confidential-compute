import { useRouter } from "next/router";
import BasicPage from "@/components/BasicPage";
import { PencilIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function AnnotateDocument() {
  const router = useRouter();
  const { did } = router.query;

  return (
    <BasicPage title="Annotate Document" icon={PencilIcon}>
      Document: {did}
      <p>
        <Link href="/logout">
          <a className="underline">Dummy next step: logout</a>
        </Link>
      </p>
    </BasicPage>
  );
}
