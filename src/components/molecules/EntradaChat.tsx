import { TextField, Button } from "@mui/material";

type EntradaChatProps = {
  entrada: string;
  setEntrada: (entrada: string) => void;
  enviarMensagem: () => void;
};

export default function EntradaChat({ entrada, setEntrada, enviarMensagem }: EntradaChatProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  };

  return (
    <div className="mt-1 flex w-full">
      <TextField
        multiline
        rows={1}
        variant="outlined"
        fullWidth
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite sua mensagem..."
        size="small"
        slotProps={{ input: {style: { overflow: 'auto' }} }}
        style={{ margin: '0px 2px' }}
      />
      <Button 
        onClick={enviarMensagem} 
        variant="contained"
        style={{backgroundColor: '#1F2937', marginRight: 2}}
      >
        Enviar
      </Button>
    </div>
  );
}
