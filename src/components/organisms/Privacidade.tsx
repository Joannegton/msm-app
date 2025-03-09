import { Box, Typography, Button } from "@mui/material"
import { SwitchCompleto } from "../molecules/SwitchCompleto"
import { ChangeEvent, useState } from "react";

export const Privacidade = () => {
    const [isDadosCompartilhados, setIsDadosCompartilhados] = useState<boolean>(false);

    const handleDadosCompartilhadosChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsDadosCompartilhados(event.target.checked)
    }
  return (
    <Box className="rounded-xl shadow-sm p-6">
        <Typography variant="h6">
            Privacidade e Dados
        </Typography>

        <Box className='max-w-md mb-4'>
            <SwitchCompleto 
                titulo={"Compartilhamento de Dados Anônimos"} 
                descricao={"Contribuir para pesquisas de saúde mental (anônimo)"} 
                checked={isDadosCompartilhados} 
                onChange={handleDadosCompartilhadosChange}        
            />
        </Box>

        <Box className='mb-4'>
            <Typography variant="subtitle1">
                Exportar Dados
            </Typography>
            <Typography variant="body2" className="text-sm" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                Baixe uma cópia de todos os seus dados
            </Typography>
            <Button variant="outlined" size="small">
                Exportar como JSON
            </Button>
        </Box>

        <Box className='mb-4'>
            <Typography variant="subtitle1">
                EXCLUIR CONTA
            </Typography>
            <Typography variant="body2" sx={{color: 'text.secondary', marginBottom: 1}}>
                Essa ação não pode ser desfeita
            </Typography>
            <Button variant="contained" color="error">
                Excluir Minha Conta
            </Button>
        </Box>
    </Box>
  )
}
