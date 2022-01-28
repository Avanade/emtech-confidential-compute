import MediaNav from "@/components/document/MediaNav";
import ShareWithModal from "@/components/document/ShareWithModal";
import Modal from "@/components/Modal";
import {
  FingerPrintIcon,
  LockClosedIcon,
  IdentificationIcon,
  InboxInIcon,
  LoginIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const features = [
  {
    name: "Security",
    description: "Data is encrypted on the server both in storage, and in use.",
    icon: LockClosedIcon,
  },
  {
    name: "Access Control",
    description:
      "YubiKey is used to provide physical access control, verified against your face and ID.",
    icon: FingerPrintIcon,
  },
  {
    name: "Authorization",
    description:
      "Confirm user access to documents, to securely share annotations.",
    icon: IdentificationIcon,
  },
  {
    name: "Secure Digest",
    description:
      "Recieve a regular digest of annotations and comments in your mailbox.",
    icon: InboxInIcon,
  },
];

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true);
  let body = (
    <>
    <MediaNav />
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Oltiva DocRoom
          </h1>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Confidentially share your most important information
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            The pandemic has changed our relationship with physical space; but
            security hasn't always kept pace with the desire to keep information
            secure. Oltiva DocRoom provides a clean room to allow multiple
            parties to securely share documents, maintaining authorization and
            many of the benefits that a locked room would otherwise provide.
          </p>
          <a
            type="button"
            href="/login"
            className="mt-2 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50"
          >
            <LoginIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
            Login
          </a>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ShareWithModal visible={visible} onClose={() => { setVisible(false) }} />
    </>
  );

  return body;
}
