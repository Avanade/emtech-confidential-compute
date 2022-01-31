import LoginPage from "@/components/LoginLayout";
// import { LoginIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import Textbox from '../components/Textbox'
import Button from '../components/Button'
import {UserIcon, KeyIcon} from '@heroicons/react/outline'
import Message from '../components/Message'
import Camera from '../components/Camera'
import Docv from '../components/Docv'
import Hihi from '../components/Hihi' // '../components/test'
function hellopage(){
    return <>
   
            <Hihi caption='meet girls' ></Hihi>
            <Docv ></Docv>
    {/* <LoginPage>
          <LoginPage.Step>1</LoginPage.Step>
          <LoginPage.Main>
          </LoginPage.Main>
          <LoginPage.Bottom>
             {hi}
             <hi></hi>
              </LoginPage.Bottom>
        </LoginPage> */}
    </>
}
export default hellopage;