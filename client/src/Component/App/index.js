import React, { useEffect, useLayoutEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { getUser } from "../../ActionReducre/Action/User";
import { withRouter } from "react-router";
import { useDispatch, connect, useSelector } from "react-redux";
import Register from "../Register";
import Login from "../Login";
import Home from "../../Routes/Home";
import Menu from "../Menu";
import Header from "../Header";
import "./app.css";

const App = props => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.common);
  const user = useSelector(state => state.myUsers);

  useEffect(() => {
    dispatch(getUser());
  }, []);

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
    <div className="backGroundFitoor">
      {(loading || user.user === null || user.user === undefined) && (
        <div className="loaderMainDiv">
          <div className="loaderNext">
            <div className="loader" />
          </div>
        </div>
      )}
      {user.user == "" ? (
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      ) : (
        <div>
          {user.user !== null && (
            <div>
              <Header props={props} />
              <div style={{ display: "flex" }}>
                {Newwidth > 800 && <Menu />}
                <Switch>
                  <Route path="/" component={Home} />
                </Switch>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default withRouter(connect()(App));
