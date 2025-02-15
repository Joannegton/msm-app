import { Home, MessageSquare, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">🧠 Saúde Mental</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to='/' className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
              <Home size={20} /> Dashboard
            </Link>
          </li>
          <li className="mb-2">
              <Link to="/chat" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
                  <MessageSquare size={20} /> Chat IA
              </Link>
          </li>
          <li className="mb-2">
              <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
                  <Settings size={20} /> Configurações
              </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}