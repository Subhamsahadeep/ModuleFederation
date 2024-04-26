import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header name={"APP2"} />
      <h1>Hi,</h1>
      <div>
        This is APP 2 Application and we will expose Header to App1 or other
        applications using Module federation.
      </div>
    </div>
  );
};

export default App;
