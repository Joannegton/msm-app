import { MenuAbas } from '../organisms/MenuAbas'
import { Perfil } from '../organisms/forms/Perfil'
import Aparencia from '../organisms/Aparencia'
import { Notificacao } from '../organisms/Notificacao'
import { Privacidade } from '../organisms/Privacidade'
import { Usuario } from '../../pages/Configuracoes'

export const Configuracao = (usuario: Usuario) => {
  return (
    <MenuAbas 
        abas={[
            {abaNome: 'Perfil', conteudo: <Perfil {...usuario} />}, 
            {abaNome: 'Aparência', conteudo: <Aparencia />},
            {abaNome: 'Notificação', conteudo: <Notificacao />},
            {abaNome: 'Privacidade', conteudo: <Privacidade/>},
        ]} 
    />
  )
}
