import React, { lazy, Suspense } from "react";
const Header = lazy(() => import("app2/Header"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header name={"APP-ONE"} />
      </Suspense>
      <h1>Hi,</h1>
      <div>
        This is APP 1 Application and we are using Header from App2 using Module
        federation.
        <br />
        The Header at top is imported from another application.
      </div>
    </div>
  );
};

export default App;
