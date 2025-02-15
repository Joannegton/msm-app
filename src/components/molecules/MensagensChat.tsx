import Mensagem from "../atoms/Mensagem";
import { MensagemProps } from "../organisms/Chat";

type MensagensChatProps = {
  mensagens: MensagemProps[];
};

export default function MensagensChat({ mensagens }: MensagensChatProps) {
  return (
    <div className="p-2 h-64 overflow-auto">
      {mensagens.map((msg, index) => (
        <Mensagem key={index} texto={msg.texto} enviador={msg.enviador} dataHora={msg.hora} />
      ))}
    </div>
  );
}
