import { useState, useEffect } from "react";
import Nav from "./components/Nav";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <main className="mx-auto my-6 min-h-screen w-9/10">
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
    </>
  );
}

export default App;
