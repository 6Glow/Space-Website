import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Main />
      {showModal && (<SideBar/>)}
      <Footer />
    </>
  );
}

export default App;
