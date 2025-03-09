import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ModalChat from "./components/organisms/ModalChat";
import { ThemeProvider } from "@emotion/react";
import { themePrincipal } from "./theme/theme";
import { ConfiguracoesPage } from "./pages/Configuracoes";
import Sidebar from "./components/organisms/Sidebar";


function App() {
  return (
    <ThemeProvider theme={themePrincipal}>
      <Router>
        <div className="flex">
        { <Sidebar />} 
          <div className="flex-grow p-6">
            <Routes>
              <Route path="/login" element={<div>Login</div>} />
              <Route path="/" element={<ConfiguracoesPage />} />
            </Routes>
          </div>
          <ModalChat />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;