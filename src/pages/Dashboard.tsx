import MoodChart from "../components/organisms/MoodChart";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Painel de Monitoramento</h1>
      <MoodChart />
    </div>
  )
}