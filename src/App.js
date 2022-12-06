import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className={`container ${isDark && "darkmode__text"}`}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Dashboard isDark={isDark} />
        <Overview isDark={isDark} />
      </div>
      <Footer />
    </>
  );
}

export default App;
