// IMPORT DEPENDENCIES
import React from "react";

// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// IMPORT ROUTES
import Routes from "./Routes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="content-fluid">
        <Routes />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
