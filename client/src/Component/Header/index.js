import React, { useLayoutEffect, useState } from "react";
import Menu from "../Menu";

const Header = props => {
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

  return (
    <div>
      {Newwidth <= 800 && <Menu />}
      test
    </div>
  );
};

export default Header;
