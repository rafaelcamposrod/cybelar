

import * as React from "react";

function CustomHome() {
  const pageLocation = window.location.pathname;

  console.log('pageLocation', pageLocation);

  if(pageLocation == "/"){

    console.log('home cybelar');
    
  } else{
    return null;
  }
}

export default CustomHome;