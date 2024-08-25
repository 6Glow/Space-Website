import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

        const today = (new Date()).toDateString();
        const localKey = `NASA-${today}`
        if (localStorage.getItem(localKey)) {
          const apiData = JSON.parse(localStorage.getItem(localKey));
          setData(apiData)
          console.log('Fetching from cache today')
          return
        }
        localStorage.clear();

      try {
        const res = await fetch(url);
        const apiDate = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiDate))
        setData(apiDate);
        console.log('Fetching from API today')
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} />}
      {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </>
  );
}

export default App;
