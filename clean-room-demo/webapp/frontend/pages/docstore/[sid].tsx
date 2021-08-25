import BasicPage from "@/components/BasicPage";
import { ViewListIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DocumentList() {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <BasicPage title="List Documents" icon={ViewListIcon}>
      Listing all documents in the store {sid}.
      <p>
        <Link href="/document/2/view">
          <a className="underline">Dummy next step: view doc 2</a>
        </Link>
      </p>
    </BasicPage>
  );
}
