import React from "react";
import { useSelector } from "react-redux";

const LoginCheck = (props) => {
  const is_login = useSelector((state) => state.user.is_login);

  const userId = localStorage.getItem("userId");

  if (is_login && userId) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};
