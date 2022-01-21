import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import styles2 from '../styles/main.css'
const LoadingCheck: NextPage = () => {
  return (

 
        <div  >
          <div >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="GREEN"  >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
            <span 
            
         // className =' width: 445px; color: rgba(89,89,92,1); position: absolute; top: 197px;   left: 0px;  font-family: Open Sans; font-weight: Regular;font-size: 18px;opacity: 1;text-align: center;'
            >Validation in progress...</span><span  
             
             >Please
                wait</span>

            <div>
                <div
         
                    className={'w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin styles.spinner'}></div>
            </div>      
             
        </div>
 
  )
}

export default LoadingCheck