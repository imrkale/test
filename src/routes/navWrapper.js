import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from '../containers/list/list';
// const List= lazy(()=>import('../containers/list/list'))

function NavWrapper() {
  return (
    <div className={`container-fluid bg-light-grey`} id="main-body">
      <div className="row otherbody" id="application-wrapper">

        <div className="col pay-rec-wrap mp-0">
          <Router>
          {/* <Suspense fallback={Loader}> */}
          <Switch>
            <Route
                  path="/"
                  exact={true}
                  component={List}
                />
          </Switch>
          {/* </Suspense> */}
          </Router>
        </div>
      </div>
    </div>
  );
}

export default NavWrapper;