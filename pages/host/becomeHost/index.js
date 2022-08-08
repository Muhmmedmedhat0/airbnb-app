import React, { useEffect } from "react";
import Router from "next/router";

function index() {
  useEffect(() => {
    // Redirect to "/host/becomeHost/placeType"
    const { pathname } = Router;
    if (pathname === "/host/becomeHost") {
      Router.push("/host/becomeHost/placeType");
    }
  });
  return (
    <div>Redirect...</div>
  )
}

export default index