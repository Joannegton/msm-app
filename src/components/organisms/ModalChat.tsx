import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import { Chat as IconeChat } from "@mui/icons-material";
import { Slide } from '@mui/material';
import Chat from "./Chat";

export default function ModalChat() {
  const [estaAberto, setEstaAberto] = useState(false);

  const alternarDrawer = () => {
    setEstaAberto(!estaAberto);
  };

  return (
    <div>
      {!estaAberto && (
        <IconButton
          aria-label="Chat"
          onClick={alternarDrawer}
          style={{
            position: 'fixed',
            bottom: 16, 
            right: 16,
            backgroundColor: '#1F2937', // bg-gray-800
            color: 'white',
            transition: 'bottom 0.3s' // Adiciona uma transição suave
          }}
        >
          <IconeChat />
        </IconButton>
      )}
      <Slide direction="up" in={estaAberto} mountOnEnter unmountOnExit>
        <div style={{ 
          position: 'fixed', 
          bottom: 10, 
          right: 50, 
          width: '300px', 
          backgroundColor: 'white', 
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' 
        }}>
          <Chat chatIsOpen={estaAberto} onClose={alternarDrawer} />
        </div>
      </Slide>
    </div>
  );
}