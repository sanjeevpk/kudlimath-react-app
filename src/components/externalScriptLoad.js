import * as React from "react";

function loadError(onError) {
  console.error(`Failed ${onError.target.src} didn't load correctly`);
}

function External() {
  React.useEffect(() => {
    const LoadExternalScript = () => {
      const externalScript = document.createElement("script");
      externalScript.async = true;
      externalScript.onerror = loadError;
      externalScript.id = "external";
      externalScript.type = "text/javascript";
      externalScript.setAttribute("crossorigin", "anonymous");
      
      document.body.appendChild(externalScript);
      externalScript.src = `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js`;
    };
    LoadExternalScript();
  }, []);

  return <></>;
}

export default External;