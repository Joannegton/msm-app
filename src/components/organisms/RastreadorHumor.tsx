import { useState } from "react"

const humores = ["😃", "🙂", "😐", "☹️", "😢"];

export default function RastreadorHumor() {
  const [humorSelecionado, setHumorSelecionado] = useState<number | null>(null)

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Como você está se sentindo hoje?</h2>
      <div className="flex-wrap gap-4">
        {humores.map((humor, index) => (
          <button
            key={index}
            className={`text-3xl p-2 rounded-lg ${humorSelecionado === index ? "bg-blue-200" : "bg-gray-100"}`}
            onClick={() => setHumorSelecionado(index)}
          >
            {humor}
          </button>
        ))}
      </div>
    </div>
  )
}