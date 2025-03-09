import { Box, Switch, Typography } from "@mui/material"

interface SwichCompletoProps {
  titulo: string
  descricao: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SwitchCompleto = (props: SwichCompletoProps) => {
    return (
        <Box className="flex items-center justify-between">
          <Box>
            <Typography variant="subtitle1">
                {props.titulo}
            </Typography>
            <Typography variant="body2" className="text-sm" sx={{ color: 'text.secondary' }}>
              {props.descricao}
            </Typography>
          </Box>
          <Switch id="dark-mode" checked={props.checked} onChange={props.onChange} />
        </Box>
    )
}