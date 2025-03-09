import { useEffect, useState } from 'react';
import { Configuracao } from '../components/layouts/Configuracao.layout'

export interface Usuario {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: string;
}

export const ConfiguracoesPage = () => {
    const [usuario, setUsuario] = useState<Usuario>({
        nome: 'Wellington',
        dataNascimento: '1998-03-01',
        email: 'wtg@gmail.com',
        senha: '123456'
    });

    useEffect(() => {
        setUsuario({
            nome: 'Wellington',
            dataNascimento: '1998-03-01',
            email: 'wtg@gmail.com',
            senha: '123456'
        })
    }, []);

  return (
    <Configuracao {...usuario}/>
  )
}
