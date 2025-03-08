import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/organisms/Sidebar";
import ModalChat from "./components/organisms/ModalChat";
import { MenuAbas } from "./components/organisms/MenuAbas";
import { Perfil } from "./components/organisms/forms/Perfil";

function App() {
  return (
    <Router>
      <div className="flex">
       { /*<Sidebar />*/} 
        <div className="flex-grow p-6">
          <Routes>
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/" element={<MenuAbas abas={[
              {abaNome: 'Perfil', conteudo: <Perfil nome={"Wellington"} email={"joannegton@gmail.com"} senha={"123456"} dataNascimento={"01/03/1998"}/>}, 
              {abaNome: 'Aparência', conteudo: <div>nbbbbb</div>},
              {abaNome: 'Notificação', conteudo: <div>nbbbbb</div>},
              {abaNome: 'Privacidade', conteudo: <div>nbbbbb</div>},
            ]} />} />
          </Routes>
        </div>
        <ModalChat />
      </div>
    </Router>
  );
}

export default App;