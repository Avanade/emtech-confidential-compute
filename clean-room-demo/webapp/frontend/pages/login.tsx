import BasicPage from "@/components/BasicPage";
import { LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Login() {
  return (
    <BasicPage title="Login" icon={LoginIcon}>
      Login required.
      <p>
        <Link href="/authenticate">
          <a className="underline">Dummy next step: authenticate</a>
        </Link>
      </p>
    </BasicPage>
  );
}
