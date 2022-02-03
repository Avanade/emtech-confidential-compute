import LoginPage from "@/components/LoginLayout";
// import { LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import Textbox from '../components/Textbox'
import Button from '../components/Button'
import { UserIcon, KeyIcon } from '@heroicons/react/outline'
import Message from '../components/Message'
import Camera from '../components/Camera'
import Docv from '../components/Docv'
function viewdoc() {
    return <>


        <Docv User='Dennis' ></Docv>

    </>
}
export default viewdoc;