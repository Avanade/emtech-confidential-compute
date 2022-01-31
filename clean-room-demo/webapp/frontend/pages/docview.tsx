import { useEffect, useRef } from 'react';
//import '../styles/index.css'
export default function HomePage() {
  const viewer = useRef(null);
 
  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        { 
          path: '/lib',
        //  initialDoc: '/lib/AZ-900 Certificate.pdf',
        //initialDoc: '../public/lib/sample.docx',
        initialDoc: '../lib/sample.pdf',
        //initialDoc: 'www.africau.edu/images/default/sample.pdf'
       //initialDoc: '/lib/book1.xlsx',
       disabledElements: [
        'viewControlsButton',
        'viewControlsOverlay','Annotations'
      ], 
        },
        viewer.current
        
      ).then(( instance) => {
        const { docViewer } = instance;
        instance.UI.disableElements(['toolbarGroup-Shapes']);
        instance.UI.disableElements(['toolbarGroup-Edit']);
        instance.UI.disableElements(['toolbarGroup-Insert']);
        instance.UI.disableElements(['toolbarGroup-Annotate']);
      
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className='MyComponent'>
      <div className='webviewer'     ref={viewer} style={{ height: '100vh' }}  ></div>
    </div>
  );
}