import "./App.css";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/header/Header";
// Pages
import Home from "./pages/Home";
import Leads from "./pages/Leads";
import Converting from "./pages/Converting";
import Completed from "./pages/Completed";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

// Context Provider
import { AlertProvider } from "./context/Alert/AlertContext";

function App() {
  return (
    <Router>
      <div className="h-full w-screen bg-neutral-800 flex">
        <AlertProvider>
          {/* Nav Bar */}
          <Header heading="AutoMoto" />
          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<Leads />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/converting" element={<Converting />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </AlertProvider>
      </div>
    </Router>
  );
}

export default App;
