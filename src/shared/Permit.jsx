import React from "react";
import { useSelector } from "react-redux";

export const Permit = (props) => {
  const user_info = useSelector((state) => state.user);

  const token = localStorage.getItem("token") ? true : false;

  if (user_info && token) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};
