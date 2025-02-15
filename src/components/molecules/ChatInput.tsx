type ChatInputProps = {
  input: string;
  setInput: (input: string) => void;
  sendMessage: () => void;
};

export default function ChatInput({ input, setInput, sendMessage }: ChatInputProps) {
  return (
    <div className="mt-4 flex">
      <input
        type="text"
        className="flex-grow p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage} className="ml-2 bg-gray-800 text-white p-2 rounded">
        Enviar
      </button>
    </div>
  );
}
