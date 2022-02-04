import { useEffect, useRef } from 'react';

export default function HomePage() {
  const viewer = useRef(null);


  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          //initialDoc: '/lib/AZ-900 Certificate.pdf',
          //initialDoc: '../public/lib/sample.docx',
          initialDoc: '../lib/sample.pdf',
          //initialDoc: 'www.africau.edu/images/default/sample.pdf'
          //initialDoc: '/lib/book1.xlsx',
          //disabledElements: [
          //'viewControlsButton',
          //'viewControlsOverlay', 'Annotations'
          //],
        },
        viewer.current

      ).then((instance) => {
        //   const { docViewer } = instance;
        const { documentViewer, annotationManager, Annotations } = instance.Core;
        instance.UI.disableElements(['toolbarGroup-Shapes']);
        instance.UI.disableElements(['toolbarGroup-Edit']);
        instance.UI.disableElements(['toolbarGroup-Insert']);
        //  instance.UI.disableElements(['toolbarGroup-Annotate']);

        /// from file
        documentViewer.setDocumentXFDFRetriever(async () => {
          // load the annotation data
          const response = await fetch('../lib/antote.log');
          const xfdfString = await response.text();

          //
          fetch("../lib/antote.log")
            .then((response) => {
              return response.text();
            })
            .then((text) => {
              console.log(text);
            });

          return xfdfString;
        });
        ///

        // you can now call WebViewer APIs here...
        annotationManager.addEventListener('annotationChanged', (annotations, action) => {
          if (action === 'add') {
            console.log('this is a change that added annotations');
          } else if (action === 'modify') {
            console.log('this change modified annotations');
          } else if (action === 'delete') {
            console.log('there were annotations deleted');
          }

          annotations.forEach((annot) => {
            console.log('annotation page number', annot.PageNumber);
          });
        });

        instance.UI.setHeaderItems(header => {
          header.push({
            type: 'actionButton',
            img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
            onClick: async () => {
              const xfdfStringreader = await annotationManager.exportAnnotations({ links: false, widgets: false })

             //  console.log(xfdfStringreader);

              // save the annotations
            }
          });
        });
        // documentViewer.addEventListener('documentLoaded', async () => {
        //   annotationManager.setCurrentUser('Dence');
        //   const rectangleAnnot = new Annotations.RectangleAnnotation({

        //     PageNumber: 1,
        //     // values are in page coordinates with (0, 0) in the top left
        //     X: 100,
        //     Y: 150,
        //     Width: 200,
        //     Height: 50,
        //     Author: annotationManager.getCurrentUser()
        //   });

        //   annotationManager.addAnnotation(rectangleAnnot);
        //   // need to draw the annotation otherwise it won't show up until the page is refreshed
        //   annotationManager.redrawAnnotation(rectangleAnnot);
        //   //console.log(await annotationManager.exportAnnotations({ links: false, widgets: false }));


        // });
      });
    });
  }
    ,
    []);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}  ></div>
    </div>
  );
}