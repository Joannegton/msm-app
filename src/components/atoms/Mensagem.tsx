
export type MensagemProps = {
  texto: string;
  enviador: string;
  dataHora: string;
}

export default function Mensagem({texto, enviador, dataHora}: MensagemProps){
  return (
    <div className={`mb-2 ${enviador == "usuario" ? "text-right ml-2": "text-left mr-2"}`}>
      <span className={`inline-block p-1 rounded text-left ${enviador == "usuario" ? "bg-blue-300 text-white" : "bg-gray-300 text-black"} `}>
        {texto}
        <div className={`text-xs mt-1 mr-1 text-gray-500 text-right`}>{dataHora}</div>
      </span>
    </div>
  )
}