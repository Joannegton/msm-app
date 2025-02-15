import { BarChart, Home, MessageSquare, Settings } from "lucide-react";

const funcionalidades = [
  { title: "Painel de Monitoramento", icon: <Home size={40} />, path: "/dashboard" },
  { title: "Chat com IA", icon: <MessageSquare size={40} />, path: "/chat" },
  { title: "Relatórios e Estatísticas", icon: <BarChart size={40} />, path: "/reports" },
  { title: "Configurações", icon: <Settings size={40} />, path: "/settings" },
];
