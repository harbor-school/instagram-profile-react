import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./components/button";

export function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <input />
      <Button primary onClick={() => history.push("/profile")}>
        Login
      </Button>
    </div>
  );
}
