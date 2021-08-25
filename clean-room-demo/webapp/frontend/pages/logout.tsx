import BasicPage from "@/components/BasicPage";
import { LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Logout() {
  return (
    <BasicPage title="Logout" icon={LogoutIcon}>
      You are successfully logged out
      <p>
        <Link href="/">
          <a className="underline">Dummy next step: home</a>
        </Link>
      </p>
    </BasicPage>
  );
}
