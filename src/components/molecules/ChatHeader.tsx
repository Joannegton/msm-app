import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

type ChatHeaderProps = {
  chatIsOpen: boolean;
  onClose: () => void;
};

export default function ChatHeader({ chatIsOpen, onClose }: ChatHeaderProps) {
  return (
    <div className="relative">
      {chatIsOpen && (
        <IconButton
          onClick={onClose}
          style={{ position: 'absolute', top: 2, right: 3 }}
        >
          <Close />
        </IconButton>
      )}
      <h1 className="text-xl text-center font-bold mb-2">Psy - ChatBot</h1>
    </div>
  );
}
