import { SyntheticEvent, useState } from 'react';
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';

interface MenuAbasProps {
    abas: Conteudos[];
}
interface Conteudos {
    abaNome: string;
    conteudo: React.ReactNode;
}

export const MenuAbas = (props : MenuAbasProps) => {
    const [abaNum, setAbaNum] = useState(0);

    const handleChange = (event: SyntheticEvent, novaAbaNum: number) => {
        setAbaNum(novaAbaNum);
    };

    return (
        <Box sx={{width: '100%', border: '1px solid black',  }}>
            <TabContext value={abaNum}>
                <TabList 
                    onChange={handleChange} 
                    aria-label='abas' 
                    textColor='secondary' 
                    indicatorColor='secondary'
                >
                    {props.abas.map((aba, index) => (
                        <Tab 
                            className='flex-1 rounded-xl'  // flex: 1, Faz com que todas as abas tenham o mesmo tamanho e ocupem a largura total
                            key={index} 
                            label={aba.abaNome} 
                            value={index} 
                            sx={{
                                '&.Mui-selected': {
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                },
                                textTransform: 'none',
                            }}
                        />
                    ))}
                </TabList>
                <TabPanel value={abaNum}>
                    {props.abas[abaNum].conteudo}
                </TabPanel>
            </TabContext>
        </Box>
    );
};