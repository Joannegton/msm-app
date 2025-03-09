import { Box, Typography, Button, Theme } from '@mui/material';
import { TemaCores } from '../molecules/TemaCores';
import { SwitchCompleto } from '../molecules/SwitchCompleto';
import { ChangeEvent, useState } from 'react';

const Aparencia = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const handleThemeChange = (theme: Theme) => {
    console.log("Tema:", theme);
  }; 

  const handleModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked)
  }

  return (
    <Box className="rounded-xl shadow-sm p-6">
      <Typography variant="h6">
        Aparência
      </Typography>
      <Box className="space-y-6 max-w-md" >
        <SwitchCompleto 
          titulo={'Modo Escuro'} 
          descricao={'Ativar tema escuro para a interface'} 
          onChange={handleModeChange} 
          checked={isDarkMode} 
        />
        <TemaCores 
          onThemeChange={handleThemeChange} 
          initialTheme={'principal'}  
        />
        <Box className="pt-4">
          <Button variant="contained">Aplicar Tema</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Aparencia;
