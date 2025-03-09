import { Box, Button, Grid2, InputAdornment, TextField, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

export interface Usuario {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: string;
}

export const Perfil = (props: Usuario) => {
    const { control, handleSubmit, formState: {errors} } = useForm<Usuario>({defaultValues: props});
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: Usuario) => {
        console.log('Dados do usuário:', data);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className="p-6 flex flex-col gap-4">
            <Typography variant="h6" >
                Perfil
            </Typography>
            <Grid2 container spacing={4}>
                <Grid2  size={{xs: 12, sm: 6}}>
                    <Controller
                        name="nome"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Nome é obrigatório'}}
                        render={({field}) => (
                            <TextField {...field} label="Nome" variant="outlined" error={!!errors.nome} helperText={errors.nome?.message} fullWidth />
                        )}
                    />
                </Grid2>
                <Grid2 size={{xs: 12, sm: 6}}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Email é obrigatório'}}
                        render={({field}) => (
                            <TextField {...field} label="Email" variant="outlined" error={!!errors.email} helperText={errors.email?.message} fullWidth />
                        )}
                    />
                </Grid2>
                <Grid2 size={{xs: 12, sm: 6}}>
                    <Controller
                        name="senha"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Senha é obrigatória'}}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Senha"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                error={!!errors.senha}
                                helperText={errors.senha?.message}
                                fullWidth
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Ver senha"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }
                                }}
                            />
                        )}
                    />
                </Grid2>
                <Grid2 size={{xs: 12, sm: 6}}>
                    <Controller
                        name="dataNascimento"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Data de nascimento é obrigatória'}}
                        render={({field}) => (
                            <TextField 
                                {...field} 
                                label="Data de Nascimento" 
                                variant="outlined" 
                                type="date" 
                                error={!!errors.dataNascimento} 
                                helperText={errors.dataNascimento?.message} 
                                fullWidth 
                                slotProps={{inputLabel: {shrink: true}}}
                            />
                        )}
                    />
                </Grid2>
            </Grid2>
            <Button type="submit" variant="contained" color="primary" className="mt-4">Salvar</Button>
        </Box>
    );
}