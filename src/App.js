import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Dashboard />
        <Overview />
      </div>
      <Footer />
    </>
  );
}

export default App;
