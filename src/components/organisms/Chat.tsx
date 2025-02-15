import { useState } from "react";
import CabecalhoChat from "../molecules/CabecalhoChat";
import MensagensChat from "../molecules/MensagensChat";
import EntradaChat from "../molecules/EntradaChat";

export type MensagemProps = {
  texto: string;
  enviador: string;
  hora: string;
};

type ChatProps = {
  chatIsOpen: boolean;
  onClose: () => void;
};

export default function Chat({ chatIsOpen, onClose }: ChatProps) {
  const [mensagens, setMensagens] = useState<MensagemProps[]>([
    {
      texto: "Olá! Como você está se sentindo hoje?",
      enviador: "bot",
      hora: "12:25",
    },
  ]);
  const [entrada, setEntrada] = useState<string>("");

  const enviarMensagem = async () => {
    if (!entrada.trim()) return;
    const mensagemUsuario: MensagemProps = {
      texto: entrada,
      enviador: "usuario",
      hora: "15:02",
    };
    setMensagens((prev) => [...prev, mensagemUsuario]);

    setTimeout(() => {
      setMensagens((prev) => [
        ...prev,
        {
          texto: "Entendo, pode me contar mais sobre isso?",
          enviador: "bot",
          hora: "17:25",
        },
      ]);
    }, 1000);

    setEntrada("");
  };

  return (
    <div className="px-2 py-4 w-85 bg-gray-50 rounded relative">
      <CabecalhoChat chatIsOpen={chatIsOpen} onClose={onClose} />
      <div className="border border-gray-200">
        <MensagensChat mensagens={mensagens} />
        <EntradaChat entrada={entrada} setEntrada={setEntrada} enviarMensagem={enviarMensagem} />
      </div>
    </div>
  );
}