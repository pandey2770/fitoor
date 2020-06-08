import React, { useState, useEffect, useLayoutEffect } from "react";
import { Menu, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./menu.css";

const Sidemenu = props => {
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const hasWindow = typeof window !== "undefined";

  const width = hasWindow ? window.innerWidth : 1367;
  const height = hasWindow ? window.innerHeight : 768;
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
  const getHeight = height - 108 + "px";

  useEffect(() => {
    if (Newwidth <= 800) {
      setCollapsed(true);
    }
    if (Newwidth > 800) {
      setCollapsed(false);
    }
  }, [Newwidth]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: Newwidth <= 800 ? 200 : 256 }}>
      {Newwidth <= 800 && (
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, height: 50 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
      )}
      {!collapsed && (
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["1"]}
          mode="inline"
          theme="dark"
          style={{
            marginTop: 10,
            height: Newwidth <= 800 ? "auto" : getHeight
          }}
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <SubMenu key="sub1" title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      )}
    </div>
  );
};

export default Sidemenu;
