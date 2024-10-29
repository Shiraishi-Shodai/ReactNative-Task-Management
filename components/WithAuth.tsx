import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/components/AuthProvider";
import Login from "@/app/Login";

// https://www.freecodecamp.org/news/higher-order-components-in-react/
function WithAuth(WrappedComponent: any) {
  return function (props: any) {
    const { user } = useContext(AuthContext);
    console.log("Hello" + user?.displayName);

    if (!user) {
      return <Login {...props} />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithAuth;
