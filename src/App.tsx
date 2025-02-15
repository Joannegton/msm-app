import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/organisms/Sidebar";
import Dashboard from "./pages/Dashboard";
import ModalChat from "./components/organisms/ModalChat";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
        <ModalChat />
      </div>
    </Router>
  );
}

export default App;