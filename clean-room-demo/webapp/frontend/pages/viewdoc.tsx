import { Breadcrumb } from '@/components/Breadcrumb';
import Button from '@/components/Button';
import DocProps from '@/components/DocProps';
import Sidebar from '@/components/Sidebar';
import { IDocument } from '@/lib/interface/document';
import { useState } from 'react';
import Docv from '../components/Docv'
function viewdoc() {
    const [docDtlSidebar, setDocDtlSidebar] = useState(false)

     // sample data
  let d = new Date('01/25/2022')

  let document:IDocument = {
    properties: {
      id: "1",
      filename:"Ledger Document.pdf",
      type: "Adobe Acrobat Document",
      ledger: "Ledger",
      size: "10 kb",
      created: "12/12/2021"
    },
    description: `This is the document's description.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    sharedWith: [
      {username: 'rainier.mendiola', name: 'Rainier Mendiola'},
      {username: 'dennis.delamida', name: 'Dennis Delamida'},
      {username: 'jerrico.delacruz', name: 'Jerrico Dela Cruz'}
    ],
    tags: ['invoice', 'expenses', 'operations'],
    comments: [
      {
          id: 1,
          name: 'Rainier',
          date: d,
          body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      },
      {
          id: 2,
          name: 'Dennis',
          date: d,
          body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      },
      {
          id: 3,
          name: 'Jerrico',
          date: d,
          body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      },
    ]
  }
    
    return <>
    
        <Breadcrumb label="Back To Documents"
            link="/document"
            title="UK Retail_Actuals Tracker.docx"
            action={<>
                <Button onClick={()=>setDocDtlSidebar(!docDtlSidebar)}>Show Document Details</Button>
                <Sidebar title={document.properties.filename} visible={docDtlSidebar} onClose={()=>setDocDtlSidebar(false)}>
                    <DocProps document={document}></DocProps>
                </Sidebar>
            </>}>
        </Breadcrumb>
        <Docv User='Dennis' ></Docv>
    </>
}
export default viewdoc;