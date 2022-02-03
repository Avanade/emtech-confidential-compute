import { useEffect, useRef } from 'react';
import { NextPage } from "next";
//import WebViewer from '@pdftron/webviewer';

const Docv: NextPage<{User:string}> =(context, )  => {
  const viewer = useRef(null);
  const User = context.User  ;
  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '../lib',
          //initialDoc: '/lib/AZ-900 Certificate.pdf',
          initialDoc: '../lib/sample.pdf',
          //initialDoc: '/lib/Sample word doc.docx',
          //initialDoc: '/lib/book1.xlsx',
        },
        viewer.current
      ).then( (instance) => {
        const { documentViewer, annotationManager, Annotations } = instance.Core;
        instance.UI.disableElements(['toolbarGroup-Shapes']);
        instance.UI.disableElements(['toolbarGroup-Edit']);
        instance.UI.disableElements(['toolbarGroup-Insert']);
        instance.UI.disableElements(['toolbarGroup-Fill']);
        annotationManager.setCurrentUser( User);
        documentViewer.setDocumentXFDFRetriever(async () => {
          // load the annotation data
          const response = await fetch('../lib/antote.log');
          const xfdfString = await response.text();
         // console.log('xfdfString');
         // console.log(xfdfString);
          return xfdfString;
        });

                // you can now call WebViewer APIs here...
        annotationManager.addEventListener('annotationChanged', (annotations, action) => {
          if (action === 'add') {
         //   console.log('this is a change that added annotations');
          } else if (action === 'modify') {
         //   console.log('this change modified annotations');
          } else if (action === 'delete') {
         //   console.log('there were annotations deleted');
          }

          annotations.forEach((annot) => {
         //   console.log('annotation page number', annot.PageNumber);
          });
        });

        instance.UI.setHeaderItems(header => {
          header.push({
            type: 'actionButton',
            img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
            onClick: async () => {
              const xfdfStringreader = await annotationManager.exportAnnotations({ links: false, widgets: false })

              //console.log(xfdfStringreader);

              // save the annotations
            }
          });
        });
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (

    <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>

  );
}

export default Docv