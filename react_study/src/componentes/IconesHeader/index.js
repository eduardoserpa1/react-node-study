import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.ul`
    margin-right: 40px;
    width: 25px;
`

function IconesHeader(){
    return (<Icones>
                {icones.map((icone) => (<Icone><img className='icone' src={icone}></img></Icone>))}
            </Icones>
            )
}

export default IconesHeader