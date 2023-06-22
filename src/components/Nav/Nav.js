import { MenuVertical, BotoesMenu } from "./styled"

function Nav(){
    return(
        <MenuVertical>
                <ul>
                    <BotoesMenu> Inicio</BotoesMenu>
                    <BotoesMenu> Em alta</BotoesMenu>
                    <BotoesMenu> Inscrições</BotoesMenu>
                    <hr></hr>
                    <BotoesMenu> Originais</BotoesMenu>
                    <BotoesMenu> Histórico</BotoesMenu>
                </ul>
        </MenuVertical>
    )
}

export default Nav;