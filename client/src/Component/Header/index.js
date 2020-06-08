import React, { useLayoutEffect, useState } from "react";
import Menu from "../Menu";
import { LogoutOutlined } from "@ant-design/icons";
import { Descriptions } from "antd";
import { logoutUser } from "../../ActionReducre/Action/User";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";

const Headerpage = props => {
  const dispatch = useDispatch();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [Newwidth, Newheight] = useWindowSize();

  const logout = () => {
    dispatch(logoutUser(props.props.history));
  };

  return (
    <div className="header-horizontal-main">
      {Newwidth <= 800 && <Menu />}
      <LogoutOutlined className="logOutButton" onClick={logout} />
    </div>
  );
};

export default Headerpage;
