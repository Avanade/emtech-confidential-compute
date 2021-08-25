import BasicPage from "@/components/BasicPage";
import { CollectionIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function DocumentStoreList() {
  return (
    <BasicPage title="List Document Stores" icon={CollectionIcon}>
      Listing all document stores.
      <p>
        <Link href="/docstore/1">
          <a className="underline">Dummy next step: open a store</a>
        </Link>
      </p>
    </BasicPage>
  );
}
