import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <main className="font-noto-sans min-h-screen bg-linear-[180deg,#ebf2fc_0%,#eef8f9_100%] py-6 dark:bg-linear-[180deg,#040918_0%,#091540_100%]">
        <div className="mx-auto w-9/10 max-w-6xl">
          <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
          <Filter setFilter={setFilter} filter={filter} />
          <Cards filter={filter} />
        </div>
      </main>
    </>
  );
}

export default App;
