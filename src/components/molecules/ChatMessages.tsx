import Mensagem from "../atoms/Mensagem";
import { MensagemProps } from "../organisms/Chat";

type ChatMessagesProps = {
  mensagens: MensagemProps[];
};

export default function ChatMessages({ mensagens }: ChatMessagesProps) {
  return (
    <div className="border border-gray-200">
      <div className="p-4 h-64 overflow-auto">
        {mensagens.map((msg, index) => (
          <Mensagem key={index} texto={msg.texto} enviador={msg.enviador} dataHora={msg.hora} />
        ))}
      </div>
    </div>
  );
}
