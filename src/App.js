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
      <main className={`container ${isDark && "darkmode__text darkmode__bg"}`}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Dashboard isDark={isDark} />
        <Overview isDark={isDark} />
      </main>
      <Footer />
    </>
  );
}

export default App;
