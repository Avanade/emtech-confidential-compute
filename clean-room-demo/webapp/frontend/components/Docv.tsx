import { useEffect, useRef } from 'react';
import { NextPage } from "next";

const Docv: NextPage = () => {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          //initialDoc: '/lib/AZ-900 Certificate.pdf',
          initialDoc: '../lib/sample.pdf',
          //initialDoc: '/lib/Sample word doc.docx',
          //initialDoc: '/lib/book1.xlsx',
        },
        viewer.current
      ).then( (instance) => {
        const { docViewer } = instance;
        instance.UI.disableElements(['toolbarGroup-Shapes']);
        instance.UI.disableElements(['toolbarGroup-Edit']);
        instance.UI.disableElements(['toolbarGroup-Insert']);
        instance.UI.disableElements(['toolbarGroup-Fill']);
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (

    <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>

  );
}

export default Docv