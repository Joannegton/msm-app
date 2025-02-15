import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Seg", mood: 4 },
  { date: "Ter", mood: 3 },
  { date: "Qua", mood: 5 },
  { date: "Qui", mood: 2 },
  { date: "Sex", mood: 4 },
]

export default function MoodChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}

