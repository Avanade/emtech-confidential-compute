visit the https://www.pdftron.com/documentation/web/get-started/nextjs/#3-place-webviewer-into-a-component

Manually Import Into an Existing Project

1. Install the PDFTron WebViewer Package by running:
    npm i @pdftron/webviewer

2. Copy static assets
    Next we must copy the static assets required for WebViewer to run. The files are located in node_modules/@pdftron/webviewer/public and must be moved into a location that will be served and publicly accessible. In Nextjs, it will be public folder.

3. Place WebViewer into a component
    First, import WebViewer into your component. Ensure that the path property in the constructor points to where you copied static assets node_modules/@pdftron/webviewer/public in Nextjs public folder.



# sample code
```
import {useEffect, useRef} from 'react';

export default function HomePage() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '/files/pdftron_about.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );
  
}
```