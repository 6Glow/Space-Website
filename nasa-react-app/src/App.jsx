import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal}/>
        )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;
