import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/components/AuthProvider";
import Login from "@/app/(stacks)";
import { useRouter } from "expo-router";

// https://www.freecodecamp.org/news/higher-order-components-in-react/
function WithAuth(WrappedComponent: any) {
  return function (props: any) {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    if (!user) {
      router.navigate("/(stacks)/");
      return <Login />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithAuth;
