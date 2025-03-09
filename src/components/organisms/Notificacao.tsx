import { Box, Button, Typography } from '@mui/material'
import { SwitchCompleto } from '../molecules/SwitchCompleto'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useState, ChangeEvent } from 'react'

export const Notificacao = () => {
  const [pushNotifications, setPushNotifications] = useState<boolean>(false)
  const [emailNotifications, setEmailNotifications] = useState<boolean>(false)
  const [reminderTime, setReminderTime] = useState<Dayjs>(dayjs('2022-04-17'))

  const handlePushChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPushNotifications(event.target.checked)
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailNotifications(event.target.checked)
  }

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setReminderTime(newValue)
    }
  }

  return (
    <Box className='rounded-xl shadow-sm p-6'>
        <Typography variant='h6'>
            Notificações
        </Typography> 

        <Box className='space-y-6 max-w-md'>
            <Box className='mb-4'>
                <SwitchCompleto
                    titulo={'Notificações Push'}
                    descricao={'Receber lembretes e atualizações'}
                    onChange={handlePushChange}
                    checked={pushNotifications}
                />
            </Box>  
            <Box className='mb-4'>
                <SwitchCompleto 
                    titulo={'Notificações por Email'} 
                    descricao={'Receber relatórios semanais'} 
                    onChange={handleEmailChange}
                    checked={emailNotifications}   
                />     
            </Box>

            <Box className='mb-4'>
                <Typography variant="subtitle1" >
                    Horário do Lembrete Diário
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={reminderTime} onChange={handleDateChange} />
                </LocalizationProvider>
            </Box>

            <Box className='mt-5'>
                <Button variant='contained'>Salvar Preferencias</Button>
            </Box>
        </Box>
    </Box>
  )
}
